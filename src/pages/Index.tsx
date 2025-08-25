import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { SocialLinks } from "@/components/SocialLinks";
import { TrendingUp, Shield, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'register'>('login');

  const features = [
    {
      icon: BookOpen,
      title: "Профессиональное обучение",
      description: "Комплексные материалы по брокерской деятельности"
    },
    {
      icon: TrendingUp,
      title: "Практические навыки",
      description: "Работа с реальными инструментами и платформами"
    },
    {
      icon: Shield,
      title: "Сертификация",
      description: "Тестирование и получение доступа к инструментам"
    },
    {
      icon: Users,
      title: "Поддержка",
      description: "Сообщество профессиональных брокеров"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Брокерская{" "}
                  <span className="text-gradient">Платформа</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Профессиональное обучение и развитие брокеров. 
                  Получите доступ к эксклюзивным материалам, пройдите сертификацию 
                  и начните карьеру в финансовой сфере.
                </p>
              </div>
              
              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="text-center p-4 rounded-lg glass-card">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Auth Forms */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {activeForm === 'login' ? (
                  <LoginForm onSwitchToRegister={() => setActiveForm('register')} />
                ) : (
                  <RegisterForm onSwitchToLogin={() => setActiveForm('login')} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-muted/30 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Присоединяйтесь к нашему сообществу</h2>
              <p className="text-muted-foreground">
                Следите за обновлениями и общайтесь с другими участниками платформы
              </p>
            </div>
            
            <SocialLinks />
            
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2024 Брокерская Платформа. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
