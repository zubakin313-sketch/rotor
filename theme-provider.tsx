import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Boxes,
  Feather,
  FlaskConical,
  Gauge,
  Play,
} from "lucide-react";

const steps = [
  {
    title: "Впуск",
    text: "Ротор открывает окно впуска — топливно-воздушная смесь заполняет растущую камеру.",
  },
  {
    title: "Сжатие",
    text: "Продолжая вращаться, ротор уменьшает объём камеры и сжимает смесь.",
  },
  {
    title: "Рабочий ход",
    text: "Свеча поджигает смесь: расширяющиеся газы толкают ротор и создают крутящий момент.",
  },
  {
    title: "Выпуск",
    text: "Отработавшие газы выходят через выпускное окно, и цикл начинается заново.",
  },
];

const advantages = [
  {
    icon: Feather,
    title: "Мало деталей",
    text: "Нет шатунов, клапанов и распредвала — конструкция заметно проще поршневого двигателя.",
  },
  {
    icon: Boxes,
    title: "Компактность",
    text: "При той же мощности двигатель меньше и легче, поэтому подходит для компактной техники.",
  },
  {
    icon: Gauge,
    title: "Плавность хода",
    text: "Ротор вращается без рывков: ровная работа и высокая удельная мощность на оборотах.",
  },
  {
    icon: FlaskConical,
    title: "Задачи проекта",
    text: "Разбираем слабые места — уплотнения и ресурс — и то, как инженеры решают эти проблемы.",
  },
];

function RotorMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 200"
      className="mx-auto h-36 w-auto sm:h-44"
    >
      <ellipse
        cx="110"
        cy="100"
        rx="95"
        ry="78"
        className="fill-secondary/60 stroke-border"
        strokeWidth="2"
      />
      <polygon
        points="110,52 68.4,124 151.6,124"
        className="fill-primary/10 stroke-primary/40"
        strokeWidth="18"
        strokeLinejoin="round"
      />
      <circle cx="110" cy="100" r="7" className="fill-primary/70" />
    </svg>
  );
}

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-3">
          <span className="text-sm font-semibold tracking-tight">
            Роторный двигатель
          </span>
          <Badge variant="secondary">Проект</Badge>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto w-full max-w-3xl space-y-6 px-5 py-16 text-center sm:py-24">
            <Badge variant="outline" className="mx-auto">
              Презентация проекта
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Роторный двигатель
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground text-pretty">
              Как треугольный ротор заменяет поршни и коленвал: устройство,
              принцип работы и сильные стороны конструкции.
            </p>
            <RotorMark />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-4 border-b">
          <div className="mx-auto w-full max-w-3xl space-y-4 px-5 py-14 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              О проекте
            </h2>
            <p className="text-muted-foreground">
              Наш проект посвящён роторно-поршневому двигателю Ванкеля —
              необычной конструкции, в которой вместо привычных поршней и
              коленчатого вала работает треугольный ротор, вращающийся внутри
              овальной камеры.
            </p>
            <p className="text-muted-foreground">
              Мы изучили, как устроен такой двигатель и почему одна маленькая
              деталь способна заменить сразу несколько сложных механизмов.
              Результат — наглядная презентация: от траектории движения ротора
              до сильных и слабых сторон этой схемы.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-4 border-b bg-muted/40">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-5 py-14 sm:py-20">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Как это устроено
              </h2>
              <p className="text-muted-foreground">
                Камера между ротором и стенкой разделена на три полости, и в
                каждой одновременно идёт свой такт работы.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-xl border bg-card p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-medium leading-none">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-muted-foreground">
              Пока ротор делает один оборот, вал делает три: каждый сектор
              ротора успевает пройти все четыре такта — двигатель работает как
              бы непрерывно.
            </p>
          </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="scroll-mt-4 border-b">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-5 py-14 sm:py-20">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Почему это интересно
              </h2>
              <p className="text-muted-foreground">
                Главное в нашей презентации — сравнение с привычным поршневым
                двигателем.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <Card key={item.title} className="flex gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <item.icon className="size-5 text-primary" aria-hidden />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium leading-none">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section id="video" className="scroll-mt-4 border-b bg-muted/40">
          <div className="mx-auto w-full max-w-3xl space-y-6 px-5 py-14 sm:py-20">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Видео
              </h2>
              <p className="text-muted-foreground">
                Короткий ролик о том, как работает роторный двигатель.
              </p>
            </div>
            {/* Заготовка под видеоролик: заменить содержимое на iframe-плеер (YouTube/VK) */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-dashed bg-background">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Play className="size-6 text-primary" aria-hidden />
                </div>
                <p className="font-medium">Видео скоро появится</p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Место зарезервировано под ролик о проекте — плеер будет
                  добавлен сюда позже.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8">
        <p className="text-center text-sm text-muted-foreground">
          Проект «Роторный двигатель»
        </p>
      </footer>
    </div>
  );
}
