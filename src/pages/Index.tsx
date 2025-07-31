import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Icon name="Cross" size={24} className="text-primary" />
              <h1 className="text-2xl font-serif text-primary">Ритуальные услуги по Северной Осетии</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={20} className="text-accent" />
              <span className="text-lg font-semibold text-primary">24/7</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-primary mb-6">
            Круглосуточная служба экстренного вызова
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оказываем полный спектр ритуальных услуг с деликатностью и профессионализмом. 
            Наша команда готова помочь в любое время суток.
          </p>
          <Button size="lg" className="text-lg px-8">
            <Icon name="Phone" size={20} className="mr-2" />
            Вызвать службу
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-serif text-primary text-center mb-12">Наши услуги</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Home" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary mb-3">Организация похорон</h4>
                <p className="text-muted-foreground">
                  Полное сопровождение организации похорон от оформления документов до проведения церемонии
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Car" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary mb-3">Транспортные услуги</h4>
                <p className="text-muted-foreground">
                  Катафалк и автобусы для перевозки усопших и сопровождающих лиц
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Flower" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary mb-3">Ритуальные принадлежности</h4>
                <p className="text-muted-foreground">
                  Гробы, венки, цветы и другие ритуальные принадлежности высокого качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-serif text-primary text-center mb-12">Прайс-лист</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-lg text-primary">Экономный пакет</span>
                    <span className="text-xl font-semibold text-primary">от 25 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-lg text-primary">Стандартный пакет</span>
                    <span className="text-xl font-semibold text-primary">от 45 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-lg text-primary">Премиум пакет</span>
                    <span className="text-xl font-semibold text-primary">от 85 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-primary">VIP пакет</span>
                    <span className="text-xl font-semibold text-primary">от 150 000 ₽</span>
                  </div>
                </div>
                <Separator className="my-6" />
                <p className="text-center text-muted-foreground">
                  Точная стоимость рассчитывается индивидуально. Консультация бесплатная.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-primary text-center mb-12">О нас</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/353e5e2d-8a94-400e-bf58-3d7e932a59b0.jpg" 
                  alt="Ритуальная церемония" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Наша компания работает в сфере ритуальных услуг более 10 лет. 
                  Мы понимаем, насколько важно в трудную минуту получить профессиональную 
                  и деликатную помощь.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Наши специалисты обладают большим опытом и готовы взять на себя 
                  все организационные вопросы, позволив вам сосредоточиться на 
                  самом важном - прощании с близким человеком.
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Award" size={24} className="text-primary" />
                  <span className="text-primary font-semibold">10+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-serif text-primary text-center mb-12">Контакты</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Icon name="Phone" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold text-primary">Круглосуточно</p>
                        <p className="text-lg text-muted-foreground">+7 (951) 015-33-33</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold text-primary">Адрес</p>
                        <p className="text-muted-foreground">Республика Северная Осетия</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Icon name="Clock" size={24} className="text-primary" />
                      <div>
                        <p className="font-semibold text-primary">Режим работы</p>
                        <p className="text-muted-foreground">24 часа в сутки, 7 дней в неделю</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-primary mb-6">Экстренный вызов</h4>
                  <p className="text-muted-foreground mb-6">
                    Наша служба работает круглосуточно. В случае экстренной ситуации 
                    звоните по телефону, и мы прибудем в течение часа.
                  </p>
                  <Button size="lg" className="w-full">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Вызвать службу сейчас
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Консультация и выезд специалиста бесплатно
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Cross" size={20} />
            <span className="text-lg font-serif">Ритуальные услуги по Северной Осетии</span>
          </div>
          <p className="text-sm opacity-80">
            Деликатность • Профессионализм • Круглосуточная поддержка
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;