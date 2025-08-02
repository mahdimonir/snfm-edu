import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { messages } from "@/data/mockData";
import { Calendar, User } from "lucide-react";

const Messages = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {language === "en"
            ? "President's and Headmaster's Messages"
            : "সভাপতি ও প্রধান শিক্ষকের বার্তা"}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "en"
            ? "Read inspiring messages from our leadership"
            : "আমাদের নেতৃত্বের অনুপ্রেরণামূলক বার্তা পড়ুন"}
        </p>
      </div>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {messages.map((message) => (
          <Card
            key={message.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={message.photo}
                    alt={message.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 text-xs"
                  >
                    {message.type === "president"
                      ? language === "en"
                        ? "President"
                        : "সভাপতি"
                      : language === "en"
                      ? "Principal"
                      : "অধ্যক্ষ"}
                  </Badge>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{message.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <User className="w-4 h-4" />
                    <span>
                      {language === "en"
                        ? message.position
                        : message.positionBn}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(message.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-lg leading-relaxed border-l-4 border-primary pl-4 italic">
                "{language === "en" ? message.message : message.messageBn}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Messages;
