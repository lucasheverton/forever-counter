import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Calendar } from "lucide-react";
import stitchImage from "@/assets/stitch.jpg";

const Index = () => {
  // Defina aqui as datas importantes (você pode alterar conforme necessário)
  const relationshipStart = new Date("2024-01-15T00:00:00"); // Data de início do namoro
  const firstDate = new Date("2024-01-01T19:30:00"); // Data do primeiro encontro
  const firstKiss = new Date("2024-01-10T22:00:00"); // Data do primeiro beijo

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
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Heart className="w-12 h-12 text-accent animate-pulse-soft" />
            <div className="text-8xl animate-pulse-soft">💜</div>
            <Heart className="w-12 h-12 text-accent animate-pulse-soft" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2 animate-scale-in">
            Nossa História de Amor
          </h1>
          <p className="text-2xl text-muted-foreground flex items-center justify-center gap-2 animate-fade-in">
            <Sparkles className="w-6 h-6 text-accent animate-pulse-soft" />
            Ohana significa família
            <Sparkles className="w-6 h-6 text-accent animate-pulse-soft" />
          </p>
        </div>

        {/* Contador Principal */}
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl text-center flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-accent animate-pulse-soft" />
              Namorando há
              <Heart className="w-8 h-8 text-accent animate-pulse-soft" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-primary/10 rounded-lg hover:bg-primary/15 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2 animate-scale-in">
                  {timeElapsed.days}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Dias
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg hover:bg-primary/15 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2 animate-scale-in">
                  {timeElapsed.hours}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Horas
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg hover:bg-primary/15 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2 animate-scale-in">
                  {timeElapsed.minutes}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Minutos
                </div>
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg hover:bg-primary/15 transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2 animate-scale-in">
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
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Calendar className="w-6 h-6 animate-pulse-soft" />
                Primeiro Encontro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">
                {formatDate(firstDate)}
              </p>
              <p className="text-muted-foreground mt-2">
                O dia em que tudo começou ✨
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Heart className="w-6 h-6 animate-pulse-soft" />
                Primeiro Beijo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-foreground">
                {formatDate(firstKiss)}
              </p>
              <p className="text-muted-foreground mt-2">
                Um momento inesquecível 💋
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer com citação do Stitch */}
        <div className="text-center text-lg text-muted-foreground italic animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={stitchImage} 
              alt="Stitch" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-lg animate-float"
            />
          </div>
          <p className="text-primary font-semibold text-xl">
            "Stitch não deixa família para trás... ou esquecer."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
