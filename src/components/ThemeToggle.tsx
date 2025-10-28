import { Moon, Sun, Monitor, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = [
  { name: 'Light', value: 'light', icon: Sun, color: 'hsl(0, 0%, 90%)' },
  { name: 'Dark', value: 'dark', icon: Moon, color: 'hsl(0, 0%, 10%)' },
  { name: 'System', value: 'system', icon: Monitor, color: 'hsl(0, 0%, 50%)' },
  { name: 'Ocean Blue', value: 'ocean-blue', icon: Palette, color: 'hsl(210, 100%, 50%)' },
  { name: 'Forest Green', value: 'forest-green', icon: Palette, color: 'hsl(140, 60%, 45%)' },
  { name: 'Royal Purple', value: 'royal-purple', icon: Palette, color: 'hsl(270, 60%, 55%)' },
  { name: 'Sunset Red', value: 'sunset-red', icon: Palette, color: 'hsl(0, 80%, 55%)' },
  { name: 'Golden Yellow', value: 'golden-yellow', icon: Palette, color: 'hsl(45, 100%, 50%)' },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-2">
        <Sun className="h-4 w-4" />
        <span className="hidden md:inline">Theme</span>
      </Button>
    );
  }

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Icon className="h-4 w-4" />
          <span className="hidden md:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.slice(0, 3).map((t) => {
          const ThemeIcon = t.icon;
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => setTheme(t.value)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ThemeIcon className="h-4 w-4" />
                <span>{t.name}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      theme === t.value
                        ? 'opacity-100 scale-100'
                        : 'opacity-30 scale-75'
                    }`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        {themes.slice(3).map((t) => {
          const ThemeIcon = t.icon;
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => setTheme(t.value)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ThemeIcon className="h-4 w-4" />
                <span>{t.name}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      theme === t.value
                        ? 'opacity-100 scale-100'
                        : 'opacity-30 scale-75'
                    }`}
                    style={{ backgroundColor: t.color }}
                  />
                ))}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;