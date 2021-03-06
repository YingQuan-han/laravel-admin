<template>
    <div class="role-author-tree">
        <ul class="auth-tree">
            <auth-tree-node v-for="(model, key, index) in authTree" :index="key" :key="index" :model="model"></auth-tree-node>
        </ul>
    </div>
</template>
<script>
import AuthTreeNode from './auth-tree-node.vue';
import './index.scss';
export default {
    name: 'auth-tree',
    components: {AuthTreeNode},
    model:{
        prop: 'treeData',
        event: 'change'
    },
    props: {
        treeData: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data() {
        return {
            authTree: [],
            flatAuth: []
        }
    },
    computed: {
        
    },
    watch: {
        treeData(newVal) {
            this.authTree = newVal;
            this.flatAuth = this.compileFlatAuth();
            this.rebuildTree();
        },
        authTree(newVal) {
            this.$emit('change', newVal);
        }
    },
    methods: {
        /** Screening permissions for role groups. */
        compileFlatAuth: function () {
            let keyCounter = 0;
            const flatTree = [];
            function flattenChildren(node, parent){
                node.nodeKey = keyCounter++;
                flatTree[node.nodeKey] = {node: node, nodeKey: node.nodeKey};
                if(typeof parent != 'undefined'){
                    flatTree[node.nodeKey].parent = parent.nodeKey;
                    flatTree[parent.nodeKey]['children'].push(node.nodeKey);
                }

                if(node['children']){
                    flatTree[node.nodeKey]['children'] = [];
                    node['children'].forEach(child => flattenChildren(child, node));
                }
            }

            this.authTree.forEach(rootNode => {
                flattenChildren(rootNode);
            });

            return flatTree;
        },
        refreshTreeUp: function(nodeKey){//向上刷新树节点数据
            const parentKey = this.flatAuth[nodeKey].parent;
            if (typeof parentKey == 'undefined') return;

            let nullCount = 0;
            let fullCount = 0;
            const node = this.flatAuth[nodeKey].node;
            const parentNode = this.flatAuth[parentKey].node;

            for (let key in parentNode['children']){
                if (parentNode['children'][key].isChecked === 0){
                    nullCount++;
                }else if (parentNode['children'][key].isChecked === 1 && !parentNode['children'][key].indeterminate){
                    fullCount++;
                }
            }
            
            if (parentNode['children'].length === nullCount){
                this.$set(parentNode, 'isChecked', 0);
                this.$set(parentNode, 'indeterminate', false);
            }else if (parentNode['children'].length === fullCount){
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', false);
            }else{
                this.$set(parentNode, 'isChecked', 1);
                this.$set(parentNode, 'indeterminate', true);
            }

            this.refreshTreeUp(parentKey);
        },
        refreshTreeDown: function(node, changes = {}){//向下刷新树节点数据

            for (let key in changes) {
                this.$set(node, key, changes[key]);
            }
            if (node['children']) {
                node['children'].forEach(child => {
                    this.refreshTreeDown(child, changes);
                });
            }          
        },
        rebuildTree: function() {
            for (let key in this.flatAuth){
                if (this.flatAuth[key].node.isChecked){
                    this.refreshTreeUp(this.flatAuth[key].nodeKey);
                }
            }
        },
        handleCheck: function({checked, nodeKey}){
            const node = this.flatAuth[nodeKey].node;
            this.$set(node, 'isChecked', checked);
            this.$set(node, 'indeterminate', false);

            this.refreshTreeUp(nodeKey);
            this.refreshTreeDown(node, {isChecked: checked, indeterminate: false});
        }
    },
    mounted () {
        this.$on('on-check', this.handleCheck);
    }
}
</script>

