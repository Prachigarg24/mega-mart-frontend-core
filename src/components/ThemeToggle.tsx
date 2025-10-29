import { Moon, Sun, Palette, RotateCcw } from 'lucide-react';
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
  { name: 'Light Orange', value: 'light', icon: Sun, color: '#ff7b00', bgColor: '#fff' },
  { name: 'Dark Orange', value: 'dark', icon: Moon, color: '#ff7b00', bgColor: '#1a1410' },
  { name: 'Ocean Blue', value: 'ocean-blue', icon: Palette, color: '#0080ff', bgColor: '#f5f9ff' },
  { name: 'Forest Green', value: 'forest-green', icon: Palette, color: '#2d9f5a', bgColor: '#f5fbf7' },
  { name: 'Royal Purple', value: 'royal-purple', icon: Palette, color: '#9966cc', bgColor: '#f9f5fc' },
  { name: 'Sunset Red', value: 'sunset-red', icon: Palette, color: '#e84855', bgColor: '#fef5f6' },
  { name: 'Golden Yellow', value: 'golden-yellow', icon: Palette, color: '#ffc700', bgColor: '#fffbf0' },
];

const ThemeToggle = () => {
  const { theme, setTheme, themes: availableThemes } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="gap-2">
        <Palette className="h-4 w-4" />
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
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Choose Theme</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleThemeChange('light');
            }}
            className="h-6 px-2 text-xs hover:bg-primary/10"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Default Themes */}
        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Default</div>
        {themes.slice(0, 2).map((t) => {
          const ThemeIcon = t.icon;
          const isActive = theme === t.value;
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => handleThemeChange(t.value)}
              className="flex items-center justify-between cursor-pointer py-3 focus:bg-accent"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm border-2 transition-all"
                  style={{ 
                    backgroundColor: t.bgColor,
                    borderColor: isActive ? t.color : 'transparent'
                  }}
                >
                  <ThemeIcon className="h-4 w-4" style={{ color: t.color }} />
                </div>
                <span className="font-medium">{t.name}</span>
              </div>
              {isActive && (
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: t.color }} />
              )}
            </DropdownMenuItem>
          );
        })}
        
        <DropdownMenuSeparator />
        
        {/* Custom Color Themes */}
        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Color Themes</div>
        {themes.slice(2).map((t) => {
          const ThemeIcon = t.icon;
          const isActive = theme === t.value;
          return (
            <DropdownMenuItem
              key={t.value}
              onClick={() => handleThemeChange(t.value)}
              className="flex items-center justify-between cursor-pointer py-3 focus:bg-accent"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm border-2 transition-all"
                  style={{ 
                    backgroundColor: t.bgColor,
                    borderColor: isActive ? t.color : 'transparent'
                  }}
                >
                  <ThemeIcon className="h-4 w-4" style={{ color: t.color }} />
                </div>
                <span className="font-medium">{t.name}</span>
              </div>
              {isActive && (
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: t.color }} />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;