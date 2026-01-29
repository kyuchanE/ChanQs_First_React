import type { HomeItemDto } from "@/presentation/dtos/bff/homeItemDto";
import { TopBar } from "@/presentation/components/TopBar";
import { Footer } from "@/presentation/components/Footer";
import { HeroSection } from "@/presentation/components/HeroSection";
import { FadeInSection } from "@/presentation/components/FadeInSection";
import { resolveApiUrl } from "@/infrastructure/http/axiosClient";

const fetchHomeItem = async (): Promise<HomeItemDto> => {
  const apiUrl = await resolveApiUrl("/api/main");
  const response = await fetch(apiUrl, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch home item: ${response.status}`);
  }

  const returnData = response.json();
  return returnData;
};

export default async function HomePage() {
  const homeItem = await fetchHomeItem();
  console.log("homeItem!!! >> ", homeItem);

  return (
    <main className="relative min-h-screen max-w-screen bg-white">
      {/* TopBar */}
      <TopBar title={homeItem.title} />
      <div id="topbar-sentinel" className="h-0.1 w-full bg-transparent" />

      <div className="flex flex-col bg-black">
        <HeroSection className="md:min-h-screen lg:min-h-[90vh] overflow-y-auto min-w-screen bg-slate-700" />
        {/* About */}
        <div className="flex flex-col bg-white pb-20">
          {/* About Info */}
          <section className="flex flex-col min-w-screen gap-5 items-center justify-center pt-25">
            <FadeInSection>
              <h1>
                About
              </h1>
            </FadeInSection>
            <FadeInSection className="flex flex-col pt-6 items-center">
              <p className="w-full text-center">
                <span className="text-4xl">
                  <strong>
                    이 순간만큼
                  </strong>
                </span>
              </p>
              <p className="w-full text-center">
                <span className="text-4xl">
                  <strong>
                    내 주방이라는 마음으로
                  </strong>
                </span>
              </p>
              <p className="w-full text-center">
                <span className="text-4xl">
                  <strong>
                    청소합니다.
                  </strong>
                </span>
              </p>
            </FadeInSection>
          </section>
          {/* Box 1 */}
          <section className="pt-15 px-30">
            <FadeInSection>
              <div className="flex flex-col rounded-2xl border border-3 border-slate-200 p-15">
                <p className="w-full text-center">
                  <span className="text-4xl">
                    <strong>
                      이 순간만큼
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center">
                  <span className="text-4xl">
                    <strong>
                      내 주방이라는 마음으로
                    </strong>
                  </span>
                </p>
              </div>
            </FadeInSection>
          </section>
          {/* Box 2 */}
          <section className="pt-15 px-30">
            <FadeInSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col rounded-2xl border border-3 border-slate-200 p-15">
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        이 순간만큼
                      </strong>
                    </span>
                  </p>
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        내 주방이라는 마음으로
                      </strong>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col rounded-2xl border border-3 border-slate-200 p-15">
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        이 순간만큼
                      </strong>
                    </span>
                  </p>
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        내 주방이라는 마음으로
                      </strong>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col rounded-2xl border border-3 border-slate-200 p-15">
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        이 순간만큼
                      </strong>
                    </span>
                  </p>
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        내 주방이라는 마음으로
                      </strong>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col rounded-2xl border border-3 border-slate-200 p-15">
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        이 순간만큼
                      </strong>
                    </span>
                  </p>
                  <p className="w-full text-center">
                    <span className="text-4xl">
                      <strong>
                        내 주방이라는 마음으로
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>
        {/* Service */}
        <div className="flex flex-col px-30 pt-20 pb-20 min-w-screen gap-35">
          {/* Service Info */}
          <section>
            <FadeInSection>
              <h1 className="w-full text-center text-white">
                Service
              </h1>
            </FadeInSection>
            <FadeInSection className="flex flex-col pt-6 items-center">
              <p className="w-full text-center">
                <span className="text-4xl text-white">
                  <strong>
                    사장님이 직접,
                  </strong>
                </span>
              </p>
              <p className="w-full text-center">
                <span className="text-4xl text-white">
                  <strong>
                    처음 약속 그대로!
                  </strong>
                </span>
              </p>
            </FadeInSection>
          </section>
          {/* Service 1 */}
          <section>
            <FadeInSection className="flex w-full md:flex-col lg:flex-row items-center justify-center md:gap-10 lg:gap-25">
              <div className="flex-1 flex-col items-center justify-center">
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      이 순간만큼
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      내 주방이라는 마음으로
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      청소합니다.
                    </strong>
                  </span>
                </p>
              </div>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMTIx/MDAxNTIwODAwMDkxMzk0.XxxZy31SmHc2uiZ0kC_E-j8ea7lyTNkwImVNoiDhgCEg.NeQXR2HZ53loHcwnnTzGcqLmh7RR4u_X8A_IbogVX1Yg.JPEG.bygani/IMG_7584.jpg?type=w800"
                alt="test img"
                className="flex-1 min-w-0 w-full h-[350px] object-cover object-center"
                loading="lazy"
              />
            </FadeInSection>
          </section>
          {/* Service 2 */}
          <section>
            <FadeInSection className="flex w-full md:flex-col-reverse lg:flex-row items-center justify-center md:gap-10 lg:gap-25">
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMzUg/MDAxNTIwNzk4NDc1NjUx.V9xIzC79Au8t3ztkabzK3muTzWRKwvstLaDFrx1V1lEg.WfTzRZVpqqzYZ29OgL_e6_rT4oq2j7cSF0axHBwOjDsg.JPEG.bygani/IMG_7631.jpg?type=w800"
                alt="test img"
                className="flex-1 min-w-0 w-full h-[350px] object-cover object-center"
                loading="lazy"
              />
              <div className="flex-1 flex-col items-center justify-center">
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      이 순간만큼
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      내 주방이라는 마음으로
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      청소합니다.
                    </strong>
                  </span>
                </p>
              </div>
            </FadeInSection>
          </section>
          {/* Service 3 */}
          <section>
            <FadeInSection className="flex md:flex-col lg:flex-row items-center justify-center md:gap-10 lg:gap-25">
              <div className="flex-1 flex-col items-center justify-center">
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      이 순간만큼
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      내 주방이라는 마음으로
                    </strong>
                  </span>
                </p>
                <p className="w-full text-center text-white">
                  <span className="text-4xl">
                    <strong>
                      청소합니다.
                    </strong>
                  </span>
                </p>
              </div>
              <img
                src="https://mblogthumb-phinf.pstatic.net/MjAxODAzMTJfMzcg/MDAxNTIwODAwMTM1Mjcw.lFHV-W62mB0rj_7qMivXVo-D17RfvV9uJEvQLV233n0g.MpX281AQa9gmyHKaaPzaPpJ9XBNH2HhtXk1_bV0c__Eg.JPEG.bygani/IMG_7585.jpg?type=w800"
                alt="test img"
                className="flex-1 min-w-0 w-full h-[350px] object-cover object-center"
                loading="lazy"
              />
            </FadeInSection>
          </section>
        </div>

        <div className="flex h-[250px] w-full bg-white p-10">

        </div>
      </div>

    </main>
  );
}
