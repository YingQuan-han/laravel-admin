<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminLoginPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //验证规则
            'username' => 'bail|required',
            'password' => 'required',
            'verify_code' => 'required',
        ];
    }


    /**
     * Custom validation rule error message.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'username.required' => '请输入用户名/手机号/邮箱!',
            'password.required' => '请输入登录密码!',
            'verify_code.required' => '请输入验证码!',
        ];
    }
}
