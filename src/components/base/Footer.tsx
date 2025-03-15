import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { suscribeNewsletter } from "@/app/actions/fetureAction";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-6 bg-gray-900 text-white">
      <div className="flex justify-between">
        <div>
          <div>© {currentYear} QuickChat. All rights reserved.</div>
          <div className="space-x-4 mt-2">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
        <div className="space-y-4 justify-center">
          <Input
            placeholder="Email Address"
            className="bg-gray-800 border-none"
          />
          <Button >Subscribe</Button>
          {/* <Button formAction={suscribeNewsletter}>Subscribe</Button> */}
        </div>
      </div>
    </footer>
  );
}