'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  budgetBands,
  contactSchema,
  intents,
  propertyTypes,
  type ContactFormValues,
} from '@/lib/validations/contact';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { intent: 'Buy', propertyType: 'Industrial', consent: false, company: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus('submitting');
    setServerError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !data.ok) throw new Error(data.error ?? 'Something went wrong.');
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
      setServerError(error instanceof Error ? error.message : 'Something went wrong.');
    }
  });

  if (status === 'success') {
    return (
      <div className="glass-card flex flex-col items-start p-9">
        <CheckCircle2 className="size-9 text-[#128C7E]" />
        <h3 className="mt-5 font-display text-2xl tracking-tight text-indigo_ink-900">
          Enquiry received
        </h3>
        <p className="mt-3 leading-relaxed text-muted">
          We have your requirement. Expect a call or WhatsApp message from our team, usually the
          same working day. For anything urgent, call us directly.
        </p>
        <Button className="mt-7" variant="outline" onClick={() => setStatus('idle')}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Your name" autoComplete="name" {...register('name')} />
          <FieldError message={errors.name?.message} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Mobile number</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="98XXXXXXXX"
            autoComplete="tel"
            {...register('phone')}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="intent">I want to</Label>
          <Select id="intent" {...register('intent')}>
            {intents.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FieldError message={errors.intent?.message} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="propertyType">Property type</Label>
          <Select id="propertyType" {...register('propertyType')}>
            {propertyTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FieldError message={errors.propertyType?.message} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget range (optional)</Label>
          <Select id="budget" defaultValue="" {...register('budget')}>
            <option value="">Select a range</option>
            {budgetBands.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FieldError message={errors.budget?.message} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="locality">Preferred area (optional)</Label>
          <Input
            id="locality"
            placeholder="Site IV, MGR Road, Rajendra Nagar…"
            {...register('locality')}
          />
          <FieldError message={errors.locality?.message} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Your requirement</Label>
          <Textarea
            id="message"
            placeholder="Size, timeline, anything specific we should know."
            {...register('message')}
          />
          <FieldError message={errors.message?.message} />
        </div>
      </div>

      {/* Honeypot, visually hidden from people and screen readers */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          className="mt-1 size-4 rounded border-input accent-indigo_ink-700"
          {...register('consent')}
        />
        <Label htmlFor="consent" className="font-normal leading-relaxed text-muted">
          I agree that Bhartiya Property may contact me by phone, WhatsApp or email about this
          enquiry, and I have read the Privacy Policy.
        </Label>
      </div>
      <FieldError message={errors.consent?.message} />

      {status === 'error' && serverError ? (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2 rounded-xl border border-sindoor-200 bg-sindoor-50 px-4 py-3 text-sm text-sindoor-700"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {serverError}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="mt-7 w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            <Send />
            Send enquiry
          </>
        )}
      </Button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="text-[0.8125rem] font-medium text-sindoor-600">
      {message}
    </p>
  );
}
