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
    <div className="min-h-screen bg-black text-white">
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 transform rotate-1 uppercase">
            ПАНК
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-bold uppercase">
            Российский рок-бар с бунтарской душой
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wider">
              МЕНЮ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-black uppercase">
              БРОНЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Cocktail Menu */}
      <section className="py-20 px-4 bg-punk-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-primary uppercase transform -rotate-1">
            КОКТЕЙЛЬНАЯ КАРТА
          </h2>
          <p className="text-center text-xl mb-12 uppercase font-bold">
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
                  <CardDescription className="text-white text-base">
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
      <section className="py-20 px-4 bg-black">
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
                        <div className="text-sm text-white uppercase">
                          {event.date.split(' ')[1]}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white uppercase">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-2 text-white">
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
      <section className="py-20 px-4 bg-punk-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-12 text-primary uppercase transform -rotate-1">
            ГАЛЕРЕЯ
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-secondary rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center group-hover:from-primary/40 transition-colors">
                  <Icon name="Music" size={48} className="text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 px-4 bg-black">
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
                  <span>ул. Панк-Рок, д. 77, Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Ежедневно 18:00 - 03:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Instagram" size={20} className="text-primary" />
                  <span>@kolhozpunk</span>
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
                <p className="mb-6 text-white">
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
      <footer className="py-8 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-punk-gray font-bold uppercase">
            © 2024 КОЛХОЗНЫЙ ПАНК • РОССИЙСКИЙ РОК-БАР
          </p>
          <p className="text-sm text-punk-gray mt-2">
            БУНТУЙ. ПЕЙ. РОКАЙ. 🤘
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;