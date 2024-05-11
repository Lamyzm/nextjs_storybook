'use client';
import IconButton from '@/components/common/IconButton';
import { XIcon } from '@/components/icon/Icons';
import { Label } from '@/components/ui/label';
import CommonTextField from '@/components/common/CommonTextField';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="p-48">
        <div className="text-xs">hi dlasjlk dj 엄준식</div>
        <div className="font-roboto text-primary">hi dlasjlk dj 엄준식</div>
        <Label>gu</Label>
        <IconButton onClick={() => {}}>
          <XIcon />
        </IconButton>
      </div>
    </>
  );
}
