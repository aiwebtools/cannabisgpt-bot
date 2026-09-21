import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Cannabis, Send, Loader2, Sparkles, Download, RotateCcw, ExternalLink, BatteryWarning } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CHATGPT_VERSION_URL, OTHER_GPTS_URL } from '@/lib/toolLinks';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'Trace the full lineage of Blue Dream back to landrace strains',
  'My flower is 22.4% THC-A and 0.8% THC — what is total THC?',
  'I infused 7g of 20% THC flower into 8 fl oz of oil — mg per mL?',
  'Build me a course on hemp farming compliance',
];

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "**Welcome to CANNABIS GPT.** I'm your cannabis & hemp expert — strain genealogy back to landrace origins, potency and edible dosage math, cultivation and formulation guidance, and full courses taught lesson by lesson.\n\nThis is for adults **21+** and for informational, educational, and research purposes only.\n\nWhat would you like to dig into first — a strain lineage, a potency calculation, or a class?",
};

const ChatSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [outOfCredits, setOutOfCredits] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasStarted = messages.length > 1;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setError(null);
      setInput('');
      const next: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
      setMessages([...next, { role: 'assistant', content: '' }]);
      setLoading(true);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/cannabis-chat`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              messages: next.filter((m) => m !== GREETING),
            }),
          }
        );

        if (!res.ok || !res.body) {
          let msg = 'The AI is unavailable right now. Please try again.';
          try {
            const data = await res.json();
            if (data?.error) msg = data.error;
          } catch {
            /* ignore */
          }
          throw new Error(msg);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: 'assistant', content: acc };
            return copy;
          });
        }

        if (!acc.trim()) {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = {
              role: 'assistant',
              content: "I couldn't generate an answer for that. Could you rephrase your cannabis or hemp question?",
            };
            return copy;
          });
        }
      } catch (e) {
        setMessages((prev) => prev.slice(0, -1));
        setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [loading, messages]
  );

  const downloadTranscript = () => {
    const body = messages
      .map((m) => `${m.role === 'user' ? 'YOU' : 'CANNABIS GPT'}:\n${m.content}\n`)
      .join('\n----------------------------------------\n\n');
    const blob = new Blob([`CANNABIS GPT — Session Transcript\nPresented by AiWebTools.Ai\n\n${body}`], {
      type: 'text/markdown;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cannabis-gpt-session.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="chat" className="py-12 sm:py-16 bg-cyber-dark relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyber-green/30 bg-cyber-green/10 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-cyber-green" />
              <span className="text-[11px] sm:text-xs text-cyber-green font-cyber tracking-wide">
                NO LOGIN REQUIRED
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber text-white mb-2">
              Chat With <span className="text-cyber-green">CANNABIS GPT</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Strain genealogy to landrace origins, THC &amp; edible potency math, hemp compliance, cultivation advice,
              and full courses — ask anything cannabis or hemp related.
            </p>
          </div>

          <div className="glassmorphism border border-cyber-green/20 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-white/10 bg-black/30">
              <div className="flex items-center gap-2 min-w-0">
                <Cannabis className="h-5 w-5 text-cyber-green flex-shrink-0" strokeWidth={1.5} />
                <span className="font-cyber text-sm text-white truncate">CANNABIS GPT</span>
                <span className="text-[10px] text-gray-500 hidden sm:inline">• 21+ • educational use only</span>
              </div>
              <div className="flex items-center gap-1">
                {hasStarted && (
                  <>
                    <button
                      onClick={downloadTranscript}
                      className="h-8 w-8 flex items-center justify-center rounded-md text-gray-400 hover:text-cyber-green transition-colors"
                      aria-label="Download transcript"
                      title="Download transcript"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        setMessages([GREETING]);
                        setError(null);
                      }}
                      className="h-8 w-8 flex items-center justify-center rounded-md text-gray-400 hover:text-cyber-purple transition-colors"
                      aria-label="New chat"
                      title="New chat"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            <div
              ref={scrollRef}
              className="h-[380px] sm:h-[460px] overflow-y-auto px-3 sm:px-4 py-4 space-y-4 scroll-smooth"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[92%] sm:max-w-[85%] rounded-xl px-3 sm:px-4 py-2.5 text-sm leading-relaxed',
                      m.role === 'user'
                        ? 'bg-cyber-purple/25 border border-cyber-purple/40 text-white'
                        : 'bg-black/40 border border-cyber-green/20 text-gray-200'
                    )}
                  >
                    {m.role === 'assistant' && !m.content && loading ? (
                      <span className="flex items-center gap-2 text-cyber-green">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing...
                      </span>
                    ) : (
                      <div className="chat-markdown">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {!hasStarted && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-left text-xs sm:text-sm text-gray-300 border border-white/10 hover:border-cyber-green/40 hover:text-white bg-black/30 rounded-lg px-3 py-2.5 transition-colors touch-manipulation"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {error && (
              <div className="px-3 sm:px-4 py-2 text-xs text-cyber-pink border-t border-cyber-pink/20 bg-cyber-pink/10">
                {error}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-white/10 p-2.5 sm:p-3 bg-black/30 flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder="Ask about a strain, potency, hemp farming, or request a course..."
                className="flex-1 resize-none bg-transparent text-white placeholder:text-gray-500 text-sm px-2 py-2 max-h-32 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="h-10 w-10 flex-shrink-0 rounded-lg bg-cyber-green/20 border border-cyber-green/40 text-cyber-green flex items-center justify-center disabled:opacity-40 hover:bg-cyber-green/30 transition-colors touch-manipulation"
                aria-label="Send message"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>

          <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-3">
            21+ only. Informational, educational, and research purposes only — not medical or legal advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
