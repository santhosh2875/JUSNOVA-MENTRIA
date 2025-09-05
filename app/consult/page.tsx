"use client";

import * as React from "react";
import Link from "next/link";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

// Zod schema
const FormSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),

  support_type: z.enum([
    "Legal Consultation",
    "Mental Health Counseling",
    "Technical Support",
    "Combined Legal & Mental Health",
    "Emergency Support",
    "General Inquiry",
  ], { required_error: "Select a request type" }),

  preferred_mode: z.enum(["Call", "Video", "In-person"], {
    required_error: "Select a consultation mode",
  }),

  priority: z.enum([
    "Emergency - Need immediate help",
    "Urgent - Within 24 hours",
    "Soon - Within a few days",
    "Flexible - Within a week",
  ], { required_error: "Select a priority" }),

  preferred_time: z.string().optional(),

  message: z.string().optional(),
  consent_terms: z.boolean().refine(v => v, "Required"),
  consent_privacy: z.boolean().refine(v => v, "Required"),
});

export default function ConsultPage() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const [supportType, setSupportType] = React.useState("");
  const [mode, setMode] = React.useState("");
  const [priority, setPriority] = React.useState("");

  const canSubmit = !!supportType && !!mode && !!priority && !loading;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get("full_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      support_type: String(fd.get("support_type") || ""),
      preferred_mode: String(fd.get("preferred_mode") || ""),
      priority: String(fd.get("priority") || ""),
      preferred_time: String(fd.get("preferred_time") || ""),
      message: String(fd.get("message") || ""),
      consent_terms: fd.get("consent_terms") === "on",
      consent_privacy: fd.get("consent_privacy") === "on",
    };

    const parsed = FormSchema.safeParse(payload);
    if (!parsed.success) {
      const msg = parsed.error.errors.map(e => e.message).join(", ");
      setError(msg);
      return;
    }

    setLoading(true);
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });
    setLoading(false);

    if (res.ok) {
      setSuccess("Thanks! Your consultation request was submitted. We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
      setSupportType("");
      setMode("");
      setPriority("");
    } else {
      const { error: err } = await res.json().catch(() => ({ error: "Submission failed" }));
      setError(err || "Submission failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container max-w-4xl mx-auto px-4 py-8 lg:py-12">
        {/* Enhanced Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Request a Consultation
            </h1>
            <p className="text-slate-600 text-sm lg:text-base max-w-2xl">
              Connect with our professional team for personalized support and guidance
            </p>
          </div>
          <Link href="/">
            <Button variant="ghost" className="hover:bg-slate-100 transition-colors duration-200">
              ← Back to Home
            </Button>
          </Link>
        </div>

        {/* Enhanced Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-6 bg-gradient-to-r from-slate-50 to-white rounded-t-lg">
            <CardTitle className="text-xl lg:text-2xl font-semibold text-slate-800 leading-relaxed">
              Professional Consultation Request
            </CardTitle>
            <p className="text-slate-600 text-sm lg:text-base mt-2">
              All information is kept strictly confidential and secure
            </p>
          </CardHeader>
          
          <Separator className="bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          
          <CardContent className="pt-8 px-6 lg:px-8">
            {/* Enhanced Status Messages */}
            {success && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium text-sm lg:text-base">{success}</span>
                </div>
              </div>
            )}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-sm lg:text-base">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Personal Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name" className="text-sm font-medium text-slate-700">
                      Full Name *
                    </Label>
                    <Input 
                      id="full_name" 
                      name="full_name" 
                      required 
                      placeholder="Enter your full name"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your.email@example.com"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Consultation Details Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Consultation Details</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700">
                      Type of Support Needed *
                    </Label>
                    <input type="hidden" name="support_type" value={supportType} />
                    <Select value={supportType} onValueChange={setSupportType}>
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200">
                        <SelectValue placeholder="Select the type of support you need" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-200">
                        <SelectItem value="Legal Consultation">Legal Consultation</SelectItem>
                        <SelectItem value="Mental Health Counseling">Mental Health Counseling</SelectItem>
                        <SelectItem value="Technical Support">Technical Support</SelectItem>
                        <SelectItem value="Combined Legal & Mental Health">Combined Legal & Mental Health</SelectItem>
                        <SelectItem value="Emergency Support">Emergency Support</SelectItem>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700">
                      Consultation Mode *
                    </Label>
                    <input type="hidden" name="preferred_mode" value={mode} />
                    <Select value={mode} onValueChange={setMode}>
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200">
                        <SelectValue placeholder="How would you prefer to meet?" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-200">
                        <SelectItem value="Call">Phone Call</SelectItem>
                        <SelectItem value="Video">Video Conference</SelectItem>
                        <SelectItem value="In-person">In-Person Meeting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-slate-700">
                      Priority Level *
                    </Label>
                    <input type="hidden" name="priority" value={priority} />
                    <Select value={priority} onValueChange={setPriority}>
                      <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-200">
                        <SelectItem value="Emergency - Need immediate help">🚨 Emergency - Need immediate help</SelectItem>
                        <SelectItem value="Urgent - Within 24 hours">⏰ Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="Soon - Within a few days">📅 Soon - Within a few days</SelectItem>
                        <SelectItem value="Flexible - Within a week">🗓️ Flexible - Within a week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred_time" className="text-sm font-medium text-slate-700">
                      Preferred Time
                    </Label>
                    <Input
                      id="preferred_time"
                      name="preferred_time"
                      placeholder="e.g., Tuesday 3-5 PM, or Morning hours"
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Message Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Additional Information</h3>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Tell Us About Your Situation
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Please provide any relevant details about your situation or specific needs. This helps us prepare for your consultation and assign the most appropriate professional."
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Enhanced Consent Section */}
              <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-medium text-slate-800 mb-3">Required Agreements</h4>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="consent_terms" 
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 transition-colors duration-200"
                    />
                    <span className="group-hover:text-slate-900 transition-colors duration-200">
                      I agree to the <span className="font-medium text-blue-600 hover:text-blue-700 underline">Terms of Service</span> and understand the consultation process.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-slate-700 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      name="consent_privacy" 
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 transition-colors duration-200"
                    />
                    <span className="group-hover:text-slate-900 transition-colors duration-200">
                      I acknowledge that I have read and agree to the <span className="font-medium text-blue-600 hover:text-blue-700 underline">Privacy Policy</span> regarding the handling of my personal information.
                    </span>
                  </label>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <Button 
                  type="submit" 
                  disabled={!canSubmit}
                  className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Submitting Request...
                    </div>
                  ) : (
                    "Submit Consultation Request"
                  )}
                </Button>
                <Link href="/">
                  <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto h-12 px-8 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-all duration-200"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            🔒 Your information is encrypted and handled with the utmost confidentiality
          </p>
        </div>
      </div>
    </div>
  );
}