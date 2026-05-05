"use client";

import { useEffect, useState } from "react";
import {
  Settings,
  Search,
  Gauge,
  Database,
  Globe2,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

type SettingsState = {
  googlePageSpeedApiKey: string;
  googleSearchConsoleClientId: string;
  googleSearchConsoleClientSecret: string;
  bingWebmasterApiKey: string;
  microsoftClarityProjectId: string;
  defaultCountry: string;
  defaultLanguage: string;
  crawlMaxPages: number;
  crawlDelayMs: number;
  enablePageSpeed: boolean;
  enableSearchConsole: boolean;
  enableBingWebmaster: boolean;
  enableMicrosoftClarity: boolean;
};

const DEFAULT_SETTINGS: SettingsState = {
  googlePageSpeedApiKey: "",
  googleSearchConsoleClientId: "",
  googleSearchConsoleClientSecret: "",
  bingWebmasterApiKey: "",
  microsoftClarityProjectId: "",
  defaultCountry: "global",
  defaultLanguage: "en",
  crawlMaxPages: 200,
  crawlDelayMs: 800,
  enablePageSpeed: false,
  enableSearchConsole: false,
  enableBingWebmaster: false,
  enableMicrosoftClarity: false,
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsState>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  async function loadSettings() {
    const res = await fetch("/api/settings");
    const data = await res.json();

    setSettings({
      ...DEFAULT_SETTINGS,
      ...(data.settings || {}),
    });
  }

  async function saveSettings() {
    setLoading(true);
    setSaved(false);

    await fetch("/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    setLoading(false);
    setSaved(true);

    setTimeout(() => setSaved(false), 2500);
  }

  useEffect(() => {
    loadSettings();
  }, []);

  function update<K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="mt-1 text-zinc-500">
            Configure integrations, crawler behavior, global targeting and audit
            options.
          </p>
        </div>

        <button
          onClick={saveSettings}
          disabled={loading}
          className="flex items-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
        >
          <Save size={16} />
          {loading ? "Saving..." : saved ? "Saved" : "Save Settings"}
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <SettingsCard
          title="Crawler Settings"
          description="Control crawl depth and server load."
          icon={<Database size={20} />}
        >
          <NumberField
            label="Max Pages Per Crawl"
            value={settings.crawlMaxPages}
            onChange={(value) => update("crawlMaxPages", value)}
          />

          <NumberField
            label="Delay Between Pages (ms)"
            value={settings.crawlDelayMs}
            onChange={(value) => update("crawlDelayMs", value)}
          />
        </SettingsCard>

        <SettingsCard
          title="Global Targeting"
          description="Default country and language for analysis."
          icon={<Globe2 size={20} />}
        >
          <SelectField
            label="Default Country"
            value={settings.defaultCountry}
            onChange={(value) => update("defaultCountry", value)}
            options={[
              ["global", "Worldwide"],
              ["IN", "India"],
              ["US", "United States"],
              ["GB", "United Kingdom"],
              ["AE", "United Arab Emirates"],
              ["CA", "Canada"],
              ["AU", "Australia"],
            ]}
          />

          <SelectField
            label="Default Language"
            value={settings.defaultLanguage}
            onChange={(value) => update("defaultLanguage", value)}
            options={[
              ["en", "English"],
              ["hi", "Hindi"],
              ["ar", "Arabic"],
              ["fr", "French"],
              ["es", "Spanish"],
            ]}
          />
        </SettingsCard>

        <SettingsCard
          title="Secret Visibility"
          description="Show or hide API credentials while editing."
          icon={<Settings size={20} />}
        >
          <button
            onClick={() => setShowSecrets(!showSecrets)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-100 px-4 py-3 text-sm"
          >
            {showSecrets ? <EyeOff size={16} /> : <Eye size={16} />}
            {showSecrets ? "Hide Secrets" : "Show Secrets"}
          </button>
        </SettingsCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SettingsCard
          title="Google PageSpeed Insights"
          description="Free performance, accessibility, best-practice and SEO audit data."
          icon={<Gauge size={20} />}
        >
          <ToggleField
            label="Enable PageSpeed"
            value={settings.enablePageSpeed}
            onChange={(value) => update("enablePageSpeed", value)}
          />

          <TextField
            label="PageSpeed API Key"
            type={showSecrets ? "text" : "password"}
            value={settings.googlePageSpeedApiKey}
            onChange={(value) => update("googlePageSpeedApiKey", value)}
          />
        </SettingsCard>

        <SettingsCard
          title="Google Search Console"
          description="Index status, search analytics, pages, queries and canonical checks."
          icon={<Search size={20} />}
        >
          <ToggleField
            label="Enable Search Console"
            value={settings.enableSearchConsole}
            onChange={(value) => update("enableSearchConsole", value)}
          />

          <TextField
            label="Client ID"
            type={showSecrets ? "text" : "password"}
            value={settings.googleSearchConsoleClientId}
            onChange={(value) => update("googleSearchConsoleClientId", value)}
          />

          <TextField
            label="Client Secret"
            type={showSecrets ? "text" : "password"}
            value={settings.googleSearchConsoleClientSecret}
            onChange={(value) =>
              update("googleSearchConsoleClientSecret", value)
            }
          />
        </SettingsCard>

        <SettingsCard
          title="Bing Webmaster Tools"
          description="Bing index, sitemap and site performance signals."
          icon={<Search size={20} />}
        >
          <ToggleField
            label="Enable Bing Webmaster"
            value={settings.enableBingWebmaster}
            onChange={(value) => update("enableBingWebmaster", value)}
          />

          <TextField
            label="Bing Webmaster API Key"
            type={showSecrets ? "text" : "password"}
            value={settings.bingWebmasterApiKey}
            onChange={(value) => update("bingWebmasterApiKey", value)}
          />
        </SettingsCard>

        <SettingsCard
          title="Microsoft Clarity"
          description="Heatmaps, recordings and user behavior insights. Requires Clarity script on site."
          icon={<Gauge size={20} />}
        >
          <ToggleField
            label="Enable Microsoft Clarity"
            value={settings.enableMicrosoftClarity}
            onChange={(value) => update("enableMicrosoftClarity", value)}
          />

          <TextField
            label="Clarity Project ID"
            type={showSecrets ? "text" : "password"}
            value={settings.microsoftClarityProjectId}
            onChange={(value) => update("microsoftClarityProjectId", value)}
          />
        </SettingsCard>
      </div>
    </div>
  );
}

function SettingsCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-zinc-950 text-white">
          {icon}
        </div>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        </div>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <p className="mb-2 text-sm font-medium">{label}</p>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm outline-none"
      />
    </label>
  );
}

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <p className="mb-2 text-sm font-medium">{label}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: [string, string][];
}) {
  return (
    <label className="block">
      <p className="mb-2 text-sm font-medium">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm outline-none"
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ToggleField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="flex w-full items-center justify-between rounded-2xl bg-zinc-100 px-4 py-3 text-sm"
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-3 py-1 text-xs ${
          value ? "bg-zinc-950 text-white" : "bg-white text-zinc-500"
        }`}
      >
        {value ? "Enabled" : "Disabled"}
      </span>
    </button>
  );
}