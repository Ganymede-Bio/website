import { testimonials } from "../../utils/constants/clients"
import { ITestimonial } from "../../types/TestimonialInterface";
import AnimateAppear from "../../components/animations/AnimateAppear";
import DividerTitleLeft from "../../components/dividers/DividerTitleLeft";

export default function TestimonialSection() {
  return (
    <>
      <AnimateAppear>
        <DividerTitleLeft title="Testimonials" />
      </AnimateAppear>
      <AnimateAppear startX={'-100vw'} threshold={0}>
        <section className="py-10">
          {testimonials.map((testimonial: ITestimonial) => (
            <div key={testimonial.company} className="bg-white border mx-10 py-10 rounded-xl shadow-md">
              <div className="flex flex-row">
                <div className="basis-1/3 pl-3 inline-block align-middle pt-12">
                  <img src={testimonial.logo} width={300} />
                </div>
                <div className="basis-2/3 pl-10">
                  <div className="flex-col">
                    <div className="basis-1">
                      <p className="text-gray-900 mr-10 mt-3">
                        <div className="font-bold text-lg inline">
                          Featured Client:
                        </div>
                        <div className="inline text-lg">
                          {" "} {testimonial.company}
                        </div>
                      </p>
                    </div>
                    <div className="basis-3">
                      <p className="text-gray-900 mr-10 mt-3">{testimonial.blurb}</p>
                    </div>
                    <div className="basis-1">
                      <p className="text-gray-900 mt-3">
                        {testimonial.speaker}, {testimonial.speaker_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </section>
      </AnimateAppear>
    </>
  )
}
