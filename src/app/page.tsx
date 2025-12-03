import Image from "next/image";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Header } from "@/components/Header";
import { CtaBlock } from "@/components/CtaBlock";
import { AiImpact } from "@/components/AiImpact";

const benefits = [
  "Снижение простоев и предсказуемый сервис",
  "Интеграция с ERP/SCADA/MES без ломки процессов",
  "Локально или в облаке, данные принадлежат заказчику",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="content-wrap container space-y-16 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-b)]">
              Промышленный IoT
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Повышаем эффективность вашего производства
            </h1>
            <p className="text-lg text-[var(--text-muted)]">
              IoT-мониторинг, аналитика и автоматизация. Локально или в облаке.
              Индивидуальные дашборды и интеграции с существующими системами.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn btn-primary">Запросить демо</button>
              <button className="btn btn-secondary btn-contact">Связаться</button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Downtime</p>
                <p className="text-3xl font-bold">-18%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  После 90 дней пилота
                </p>
              </div>
              <div className="card border border-[var(--border)] p-4">
                <p className="text-sm text-[var(--text-muted)]">Uptime</p>
                <p className="text-3xl font-bold">99.2%</p>
                <p className="text-sm text-[var(--text-muted)]">
                  За счёт сегментации IoT сети
                </p>
              </div>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">IoT → AI</h3>
            <p className="mt-3 text-[var(--text-muted)]">
              Внедрение ИИ в производственный процесс невозможно без инфраструктуры сбора данных. 
              IoT дает каналы связи и инструменты, через которые ИИ видит процессы и может
              управлять ими.
            </p>
            <div className="mt-13 flex justify-center">
              <Image
                src="/sensor-to-db.svg"
                alt="Поток от датчика к базе данных"
                width={420}
                height={220}
                priority
              />
            </div>
          </div>
        </section>

        <AiImpact />

        <section className="space-y-6" id="process">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Процесс: от анализа до поддержки</h2>
          </div>
          <ProcessSteps />
        </section>

        <section className="space-y-4" id="solutions">
          <h2 className="text-2xl font-semibold">
            Шаги внедрения AI в производстве
          </h2>
          <div className="card border border-[var(--border)] bg-[#0f131f] p-5 text-[var(--text-muted)] space-y-2">
            <p>1) Установка сенсоров и исполнительных устройств (разработка новых, интеграция существующих).</p>
            <p>2) Сбор и хранение данных (телеметрия, события, фото/видео).</p>
            <p>3) Выбор технологии ML: CV (визуальный контроль), акустика, predictive maintenance, аномалии, прогноз, NLP для журналов.</p>
            <p>4) Создание интерфейса: дашборды, алерты, API, интеграции.</p>
            <p>5) Обучение модели: подготовка данных, разметка, тренировка, тесты.</p>
            <p>6) Интеграция: развёртывание модели, подключение к правилам управления.</p>
            <p>7) Использование: мониторинг метрик качества/скорости/брака, сценарии автоматизации.</p>
            <p>8) Обслуживание: обновления моделей/ПО, контроль дрифта, поддержка оборудования.</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]" id="products">
          <div className="card border border-[var(--border)] p-6">
            <h2 className="text-2xl font-semibold">Продукты и платформа</h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Сбор данных → хранение → визуализация → автоматизация. Права на
              систему/исходники могут переходить заказчику по договорённости.
            </p>
            <ul className="mt-4 space-y-2 text-[var(--text-muted)]">
              <li>• Датчики: температура, вибрация, давление, утечки, CO₂</li>
              <li>• Интерфейсы: RS485/Modbus/4–20 mA/0–10V, MQTT, OPC-UA</li>
              <li>• Хранение: локальная БД или облако, резервирование</li>
              <li>• Автоматизация: правила, уведомления, управление реле/клапанами</li>
              <li>• Интеграции: ERP/SCADA/MES, API, OTA с подписью и откатом</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="btn btn-primary">Запросить демо</button>
              <button className="btn btn-secondary btn-contact">Связаться</button>
            </div>
          </div>
          <div className="card border border-[var(--border)] p-6">
            <h3 className="text-xl font-semibold">Результат</h3>
            <ul className="mt-3 space-y-2 text-[var(--text-muted)]">
              {benefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-[var(--text-muted)]">
              TLS1.3/AES-256/HMAC, сегментация сети, аудит действий,
              локальный/облачный режим, локальный кэш при потере связи.
            </div>
          </div>
        </section>

        <div id="contact">
          <CtaBlock
            eyebrow="CTA"
            title="Запустим пилот за 30 дней"
            subtitle="Минимум датчиков, ясные уведомления, безопасное подключение."
            primaryText="Запросить демо"
            secondaryText="Связаться"
          />
        </div>
      </main>
      <div className="footer-note">
        ЧП «Вельд Техно» — промышленный IoT. Veld tech. PE - industrial IOT. 
      </div>
    </>
  );
}
