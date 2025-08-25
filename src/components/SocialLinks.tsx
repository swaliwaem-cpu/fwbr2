import { MessageCircle, Youtube, PlayCircle, Phone } from "lucide-react";

export const SocialLinks = () => {
  const links = [
    {
      icon: MessageCircle,
      label: "Telegram",
      href: "https://t.me/brokerplatform",
      color: "hover:text-[#0088cc]"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@brokerplatform",
      color: "hover:text-[#ff0000]"
    },
    {
      icon: PlayCircle,
      label: "VK Видео",
      href: "https://vk.com/brokerplatform",
      color: "hover:text-[#0077ff]"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      color: "hover:text-[#25d366]"
    }
  ];

  return (
    <div className="flex justify-center space-x-6">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 text-muted-foreground transition-colors ${link.color} group`}
            aria-label={link.label}
          >
            <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};