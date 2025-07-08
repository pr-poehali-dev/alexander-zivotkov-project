import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="text-amber-400" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  АЛЕКСАНДР ЖИВОТКОВ
                </h1>
                <p className="text-sm text-slate-300 font-mono">
                  АРМЕЙСКИЕ КОЛЛЕКЦИИ
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#services"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#reviews"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Badge className="bg-amber-400 text-slate-900 mb-4 px-4 py-2 text-sm font-bold">
              ЭКСПЕРТ ПО ВОЕННЫМ КОЛЛЕКЦИЯМ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ПРОФЕССИОНАЛЬНЫЕ
              <span className="block text-amber-400">ВОЕННЫЕ УСЛУГИ</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Эксклюзивные военные коллекции, аутентичные предметы военной
              истории и профессиональные консультации для серьезных
              коллекционеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-3"
              >
                <Icon name="Star" className="mr-2" size={20} />
                КАТАЛОГ УСЛУГ
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500 text-white hover:bg-slate-800 px-8 py-3"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                СВЯЗАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              ВОЕННЫЕ УСЛУГИ
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Комплексное обслуживание для коллекционеров военной атрибутики
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/80 border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Search" className="text-amber-400 mb-3" size={32} />
                <CardTitle className="text-white">
                  Поиск редких экспонатов
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Нахожу уникальные военные предметы по всему миру
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-400">
                • Аутентичная военная форма\n• Награды и знаки отличия\n•
                Историческое оружие\n• Полевое снаряжение
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Eye" className="text-amber-400 mb-3" size={32} />
                <CardTitle className="text-white">Экспертная оценка</CardTitle>
                <CardDescription className="text-slate-300">
                  Профессиональная аутентификация предметов
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-400">
                • Определение подлинности\n• Историческая экспертиза\n• Оценка
                стоимости\n• Сертификация
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-slate-700 hover:border-amber-400/50 transition-all duration-300">
              <CardHeader>
                <Icon name="Users" className="text-amber-400 mb-3" size={32} />
                <CardTitle className="text-white">Консультации</CardTitle>
                <CardDescription className="text-slate-300">
                  Индивидуальное сопровождение коллекционеров
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-400">
                • Стратегия коллекционирования\n• Инвестиционные советы\n•
                Контакты поставщиков\n• Личные консультации
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              ПОРТФОЛИО НАХОДОК
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Некоторые из эксклюзивных предметов, найденных для клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="/img/2208bb97-e2ee-4a71-97ee-f34d008d5bdc.jpg"
                alt="Военный коллекционер"
                className="w-full h-80 object-cover rounded-lg border border-slate-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">
                    Александр Животков
                  </h4>
                  <p className="text-slate-300">
                    Эксперт по военным коллекциям с 15-летним стажем
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="/img/65d3d46d-d8b8-41b9-b4d1-21de1403a196.jpg"
                alt="Военные коллекции"
                className="w-full h-80 object-cover rounded-lg border border-slate-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg flex items-end p-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">
                    Эксклюзивные находки
                  </h4>
                  <p className="text-slate-300">
                    Редкие военные предметы для серьезных коллекционеров
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              ОТЗЫВЫ КЛИЕНТОВ
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Что говорят коллекционеры о работе с Александром
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/80 border-slate-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-amber-400"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "Александр нашел для меня уникальную коллекцию советских
                  наград. Профессионализм на высшем уровне!"
                </p>
                <p className="text-amber-400 font-semibold">— Дмитрий К.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-slate-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-amber-400"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "Эксклюзивные предметы, честные цены и глубокие знания
                  истории. Рекомендую всем коллекционерам!"
                </p>
                <p className="text-amber-400 font-semibold">— Владимир М.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-slate-700">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="text-amber-400"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "Благодаря Александру моя коллекция стала одной из лучших в
                  стране. Настоящий профессионал!"
                </p>
                <p className="text-amber-400 font-semibold">— Сергей Р.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              СВЯЗАТЬСЯ СО МНОЙ
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Готов обсудить ваши потребности в военных коллекциях
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-900/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="MapPin"
                      className="text-amber-400 mr-3"
                      size={24}
                    />
                    Местоположение
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>Москва, Россия</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Работаю по всей территории РФ и СНГ
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/80 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Phone"
                      className="text-amber-400 mr-3"
                      size={24}
                    />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p>+7 (XXX) XXX-XX-XX</p>
                  <p>alex.zhivotkov@military-collections.ru</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-12 py-4"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                НАЧАТЬ СОТРУДНИЧЕСТВО
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Shield" className="text-amber-400" size={24} />
            <span className="text-white font-bold">АЛЕКСАНДР ЖИВОТКОВ</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Александр Животков. Все права защищены. Военные коллекции и
            эксклюзивные находки.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
