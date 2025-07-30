import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const cocktails = [
    {
      name: "30 лет в туалете",
      description: "Крепкий коктейль с водкой, самбукой и красным перцем",
      price: "450₽",
      band: "Сектор Газа",
      icon: "🔥"
    },
    {
      name: "Кукла Колдуна",
      description: "Мистический коктейль с абсентом и травяными настойками",
      price: "520₽", 
      band: "Король и Шут",
      icon: "🎭"
    },
    {
      name: "Лесник",
      description: "Лесные ягоды, джин и можжевеловая настойка",
      price: "480₽",
      band: "Король и Шут", 
      icon: "🌲"
    },
    {
      name: "Алкоголичка",
      description: "Классический коктейль с водкой и клюквенным соком",
      price: "380₽",
      band: "Красная Плесень",
      icon: "🍺"
    },
    {
      name: "Твой Звонок",
      description: "Освежающий коктейль с джином и тоником",
      price: "420₽",
      band: "Сплин",
      icon: "📞"
    },
    {
      name: "Мертвый Анархист",
      description: "Черный коктейль с темным ромом и кофейным ликером",
      price: "550₽",
      band: "Гражданская Оборона",
      icon: "⚡"
    }
  ];

  const events = [
    {
      date: "5 февраля",
      title: "Tribute to Сектор Газа",
      time: "20:00",
      price: "800₽"
    },
    {
      date: "12 февраля", 
      title: "Вечер КиШа",
      time: "21:00",
      price: "900₽"
    },
    {
      date: "19 февраля",
      title: "Панк-рок караоке",
      time: "19:00", 
      price: "Бесплатно"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/ae243bfb-d106-4f8f-8eff-52628b333145.jpg')`
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 transform -rotate-2 uppercase tracking-wider">
            КОЛХОЗНЫЙ
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 transform rotate-1 uppercase">
            ПАНК
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-bold uppercase text-black">
            Российский рок-бар с бунтарской душой
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wider">
              МЕНЮ
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white font-black uppercase">
              БРОНЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Cocktail Menu */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-primary uppercase transform -rotate-1">
            КОКТЕЙЛЬНАЯ КАРТА
          </h2>
          <p className="text-center text-xl mb-12 uppercase font-bold text-black">
            НАПИТКИ ПО МОТИВАМ ЛЕГЕНДАРНЫХ ПЕСЕН
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktails.map((cocktail, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{cocktail.icon}</span>
                    <Badge variant="outline" className="border-primary text-primary">
                      {cocktail.band}
                    </Badge>  
                  </div>
                  <CardTitle className="text-2xl font-black text-primary uppercase">
                    {cocktail.name}
                  </CardTitle>
                  <CardDescription className="text-black text-base">
                    {cocktail.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-primary">
                      {cocktail.price}
                    </span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 font-bold">
                      ЗАКАЗАТЬ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary uppercase transform rotate-1">
            СОБЫТИЯ
          </h2>
          
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="bg-card border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary">
                          {event.date.split(' ')[0]}
                        </div>
                        <div className="text-sm text-black uppercase">
                          {event.date.split(' ')[1]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-black uppercase">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-2 text-black">
                            <Icon name="Clock" size={16} />
                            {event.time}
                          </span>
                          <span className="text-primary font-bold">
                            {event.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 font-bold uppercase">
                      КУПИТЬ БИЛЕТ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary uppercase transform -rotate-1">
            ГАЛЕРЕЯ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/img/ae243bfb-d106-4f8f-8eff-52628b333145.jpg" 
                alt="Интерьер рок-бара" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/img/070d11d0-40f4-4d16-a5b9-91ff09f568b7.jpg" 
                alt="Выступление в баре" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/img/703f9732-705a-4162-8de0-bf6861517eed.jpg" 
                alt="Коктейли в баре" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src="/img/1584b150-bdfe-482a-8b3e-033b4a304686.jpg" 
                alt="Рок-группа на сцене" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center group-hover:from-primary/40 transition-colors">
                <Icon name="Guitar" size={48} className="text-primary" />
              </div>
            </div>
            <div className="aspect-square bg-secondary rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center group-hover:from-primary/40 transition-colors">
                <Icon name="Mic" size={48} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary uppercase transform rotate-1">
            КОНТАКТЫ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-primary uppercase">
                  АДРЕС И КОНТАКТЫ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-black">ул. Панк-Рок, д. 77, Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="text-black">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-black">Ежедневно 18:00 - 03:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Instagram" size={20} className="text-primary" />
                  <span className="text-black">@kolhozpunk</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-black text-primary uppercase">
                  БРОНИРОВАНИЕ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-black">
                  Забронируйте столик и окунитесь в атмосферу настоящего рок-бара!
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-black uppercase">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    ЗАБРОНИРОВАТЬ СТОЛИК
                  </Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-black uppercase">
                    <Icon name="Music" className="mr-2" size={20} />
                    ЗАКАЗАТЬ ВЫСТУПЛЕНИЕ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="bg-primary/20" />

      {/* Footer */}
      <footer className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-black font-bold uppercase">
            © 2024 КОЛХОЗНЫЙ ПАНК • РОССИЙСКИЙ РОК-БАР
          </p>
          <p className="text-sm text-black mt-2">
            БУНТУЙ. ПЕЙ. РОКАЙ. 🤘
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;