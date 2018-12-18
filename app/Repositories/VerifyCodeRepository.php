<?php
/**
 * Verification code repository.
 * User: YingQuan-han
 * Date: 2018/12/18
 * Time: 23:00
 */

namespace App\Repositories;


use App\Models\VerifyCode;

class VerifyCodeRepository extends Repository
{
    public function model()
    {
        // TODO: Implement model() method.
        return VerifyCode::class;
    }


    /**
     * Create verify code.
     *
     * @param array $option
     * @return mixed
     */
    public function createVerifyCode(array $option)
    {
        foreach ($option as $key=>$value){
            $this->model->$key = $value;
        }

        return $this->model->save();
    }
}