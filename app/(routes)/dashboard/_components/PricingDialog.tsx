'use client';

import React from 'react';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const PricingDialog = () => {
  return (
    <DialogContent className="bg-[#041E21]/80 backdrop-blur-lg text-white rounded-xl border border-white/10 shadow-xl max-w-[700px]">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-teal-400">
          Upgrade Plan
        </DialogTitle>
        <DialogDescription className="text-gray-400">
          Choose a plan that suits your needs
        </DialogDescription>
      </DialogHeader>

      {/* Pricing options horizontal on large screens, vertical on small */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Free Plan */}
        <div className="flex-1 p-6 rounded-lg bg-[#052426]/70 backdrop-blur-md border border-white/10 text-center">
          <h3 className="font-bold text-lg">Free Plan</h3>
          <p className="text-xs text-gray-400 mt-1">Get started with basic features</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li> 5 files max</li>
            <li> Basic support</li>
            <li> Limited storage</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex-1 p-6 rounded-lg bg-[#06363A]/70 backdrop-blur-md border border-teal-400/30 text-center">
          <h3 className="font-bold text-lg text-teal-300">Premium - $9/month</h3>
          <p className="text-xs text-gray-300 mt-1">Unlimited access to all features</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li> Unlimited files</li>
            <li>Priority support</li>
            <li> Team collaboration</li>
            <li> Advanced analytics</li>
          </ul>
        </div>
      </div>

      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button className="bg-teal-500 hover:bg-teal-400 text-black w-full">
            Upgrade Now
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default PricingDialog;
