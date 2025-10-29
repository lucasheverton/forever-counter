import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Calendar } from "lucide-react";
import stitchImage from "@/assets/stitch.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  // Defina aqui as datas importantes (você pode alterar conforme necessário)
  const relationshipStart = new Date("2025-08-08T00:00:00"); // Data de início do namoro
  const firstDate = new Date("2025-07-12T12:45:00"); // Data do primeiro encontro
  const firstKiss = new Date("2025-07-12T14:30:00"); // Data do primeiro beijo

  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - relationshipStart.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [relationshipStart]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header com Stitch */}
        <div className="text-center space-y-4 animate-in fade-in duration-1000">
          <div className="text-8xl mb-4 animate-bounce">💜</div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">
            Nossa História de Amor
          </h1>
          <p className="text-2xl text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            Eu te amo muito 💙 meu pôr do sol 🌇
            <Sparkles className="w-6 h-6 text-accent" />
          </p>
        </div>

        {/* Contador Principal */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-in slide-in-from-bottom duration-1000">
          <CardHeader>
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-accent animate-pulse" />
              Juntos oficialmente há
              <Heart className="w-8 h-8 text-accent animate-pulse" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">
                  {timeElapsed.days}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Dias
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">
                  {timeElapsed.hours}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Horas
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">
                  {timeElapsed.minutes}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Minutos
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <div className="text-5xl font-bold text-primary mb-2">
                  {timeElapsed.seconds}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Segundos
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Datas Importantes */}
        <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom duration-1000 delay-200">
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Calendar className="w-6 h-6" />
                Primeiro Encontro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">
                {formatDate(firstDate) || 'Carregando ...'}
              </p>
              <p className="text-muted-foreground mt-2">
                O dia em que tudo começou ✨
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg hover:scale-105 transition-transform">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Heart className="w-6 h-6" />
                Primeiro Beijo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">
                {formatDate(firstKiss) || 'Carregando ...'}
              </p>
              <p className="text-muted-foreground mt-2">
                Um momento inesquecível 💋
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Carrossel de Fotos */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg animate-in slide-in-from-bottom duration-1000 delay-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              Nossos Momentos
              <Sparkles className="w-6 h-6 text-accent" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                })
              ]}
              className="w-full max-w-3xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Foto 1</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Foto 2</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Foto 3</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Footer com citação do Stitch */}
        <div className="text-center text-lg text-muted-foreground italic animate-in fade-in duration-1000 delay-500">
          <img 
            src={stitchImage} 
            alt="Stitch" 
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
          />
          <p className="text-primary font-semibold">
            "Família quer dizer nunca abandonar ou esquecer."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
