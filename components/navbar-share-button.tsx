"use client";

import React, { useState, useEffect } from "react";
import { Share2, Copy, Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface NavbarShareButtonProps {
  companySlug?: string;
  companyName?: string;
}

export function NavbarShareButton({
  companySlug,
  companyName,
}: NavbarShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  // Update URL on open or client mount to capture current query params & hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
      setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
    }
  }, [open, companySlug]);

  const displayName = companyName || "Company";
  const shareTitle = `${displayName} Interview Questions | CodeCraft`;
  const shareText = `Practice curated ${displayName} coding interview questions on CodeCraft`;

  const handleCopyLink = async () => {
    const urlToCopy = shareUrl || (typeof window !== "undefined" ? window.location.href : "");
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(urlToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = urlToCopy;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Failed to copy link.");
    }
  };

  const handleNativeShare = async () => {
    const url = shareUrl || (typeof window !== "undefined" ? window.location.href : "");
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url,
        });
      } catch (err: unknown) {
        if ((err as Error)?.name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <>
      {/* Header Share Button — Consistent with existing top-right header */}
      <Button
        type="button"
        size="sm"
        onClick={() => {
          if (typeof window !== "undefined") {
            setShareUrl(window.location.href);
          }
          setOpen(true);
        }}
        className="gap-1.5 font-medium cursor-pointer shadow-2xs text-xs h-8 px-2 sm:px-3 bg-card/70 hover:bg-muted text-foreground border border-border hover:border-border/80 active:scale-95 transition-all shrink-0"
        title={`Share ${displayName} interview questions`}
        aria-label="Share questions"
      >
        <Share2 className="size-3.5 shrink-0 text-muted-foreground" />
        <span className="hidden sm:inline">Share Question</span>
        <span className="hidden xs:inline sm:hidden">Share</span>
      </Button>

      {/* Share Dialog Popover */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100%-1.5rem)] max-w-md p-5 sm:p-6 rounded-xl border border-border bg-card text-card-foreground shadow-2xl">
          <DialogHeader className="p-0 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Share2 className="size-4" />
              </div>
              <div>
                <DialogTitle className="text-sm sm:text-base font-bold text-foreground">
                  Share {displayName} Questions
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                  Share this question list or copy the direct link.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-3.5 pt-1">
            {/* Copy Link Input & Button */}
            <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 p-1.5 pl-3">
              <Link2 className="size-3.5 shrink-0 text-muted-foreground" />
              <input
                type="text"
                readOnly
                value={shareUrl}
                aria-label="Shareable link"
                onClick={(e) => (e.target as HTMLInputElement).select()}
                className="flex-1 min-w-0 bg-transparent text-xs text-foreground font-mono truncate focus:outline-none select-all"
              />
              <Button
                type="button"
                size="sm"
                onClick={handleCopyLink}
                className={`h-7.5 px-3 rounded-md text-xs font-semibold cursor-pointer transition-all shrink-0 ${
                  copied
                    ? "bg-emerald-600 hover:bg-emerald-600 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 shrink-0" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 shrink-0" />
                    <span>Copy Link</span>
                  </>
                )}
              </Button>
            </div>

            {/* Native Web Share API Button (when supported) */}
            {canNativeShare && (
              <Button
                type="button"
                variant="outline"
                onClick={handleNativeShare}
                className="w-full h-8.5 gap-2 text-xs font-semibold cursor-pointer border-border hover:bg-muted text-foreground"
              >
                <Share2 className="size-3.5 text-muted-foreground" />
                <span>Share via System / Apps</span>
              </Button>
            )}

            {/* Social Share Shortcuts */}
            <div className="pt-2.5 border-t border-border/70">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                Quick Share
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* X / Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                  )}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/30 hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer"
                  title="Share on X"
                >
                  <svg className="size-3 shrink-0 fill-foreground" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>X</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/30 hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <svg className="size-3 shrink-0 fill-[#0A66C2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76a1.76 1.76 0 1 0-3.52 0c0 .97.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${shareText} ${shareUrl}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg border border-border bg-muted/30 hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <svg className="size-3 shrink-0 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.36.06-.55.27-.19.21-.73.71-.73 1.73s.75 2.01.85 2.15c.1.14 1.45 2.27 3.56 3.16.5.21.89.34 1.2.44.51.16.97.14 1.34.08.41-.06 1.26-.52 1.44-1.02.18-.5.18-.93.12-1.02-.05-.09-.2-.14-.42-.25-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11s-.58.71-.71.86c-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.53-1.28-.73-1.75-.19-.47-.39-.4-.53-.41z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
