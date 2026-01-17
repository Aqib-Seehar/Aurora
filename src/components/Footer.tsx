"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-black pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-semibold text-white tracking-tight text-lg">Aurora</span>
          </div>
          
          <div className="inline-block p-4 rounded-xl bg-white/5 border border-[var(--color-border)] backdrop-blur-sm">
            <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-1">One plan</div>
            <div className="text-3xl font-bold text-white mb-1">$10 <span className="text-sm font-normal text-[var(--color-text-secondary)]">/ mo</span></div>
            <div className="text-xs text-[var(--color-text-secondary)] opacity-50">Billed annually</div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li><Link href="#" className="hover:text-white transition-colors">Download</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Docs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Manifesto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Discord</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-text-secondary)] opacity-50">
        © {new Date().getFullYear()} AuroraApp, LLC. All rights reserved.
      </div>
    </footer>
  );
}
