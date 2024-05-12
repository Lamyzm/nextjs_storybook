'use client';
import IconButton from '@/components/common/IconButton';
import { XIcon } from '@/components/icon/Icons';
import { Label } from '@/components/ui/label';
import CommonTextField from '@/components/common/CommonTextField';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleMyFormSubmit } from '@/serverActions/actions';

export interface IFormInput {
  firstName: string;
}
export default function Home() {
  const User = z.object({
    firstName: z
      .string()
      .min(1, { message: '이름은 필수' })
      .min(6, { message: '이름은 6이상 12이하' })
      .max(12, { message: '이름은 6이상 12이하' }),
  });

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    watch,
    resetField,
    clearErrors,
    getFieldState,
    setValue,
    trigger,
    setFocus,
    formState: { errors, isValid, isLoading, isSubmitted, isSubmitting },
  } = useForm<IFormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(User),
    mode: 'onBlur',
  });

  const onMyFormSubmit = async (data: IFormInput) => {
    await handleMyFormSubmit(data);
  };

  return (
    <>
      <button onClick={() => console.log(getValues())}>asd</button>
      <div className="p-48">
        <div className="text-xs">hi dlasjlk dj 엄준식</div>
        <div className="font-roboto text-primary">hi dlasjlk dj 엄준식</div>
        <Label>gu</Label>
        <IconButton onClick={() => {}}>
          <XIcon />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onMyFormSubmit)}>
        <CommonTextField
          errorMessage={errors}
          placeholder="텍스트를 입력해 주세요"
          IsError={!(Object.keys(errors).length === 0)}
          register={register}
          id={'firstName'}
          watch={watch}
          resetField={resetField}
          setFocus={setFocus}
        />
        <button className="btn">전송</button>
      </form>
    </>
  );
}
