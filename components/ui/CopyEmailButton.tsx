'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copiedLabel: string;
  failedLabel: string;
}

export function CopyEmailButton({ email, label, copiedLabel, failedLabel }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timer = window.setTimeout(() => setStatus('idle'), 2500);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        title={label}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand-500/70 hover:text-ink"
      >
        {status === 'copied' ? (
          <Check className="h-4 w-4 text-accent" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === 'copied' ? copiedLabel : status === 'error' ? failedLabel : ''}
      </span>
      {status === 'error' ? <span className="text-xs text-muted">{failedLabel}</span> : null}
    </>
  );
}
