import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { servicesData } from "@/constants";


export default function ServicesPage() {
  return (
    <div className="bg-bodyColor text-white/80">
      <Container className="bg-bodyColor text-white/80 py-20 min-h-screen content-center">
        <div className="px-2 text-pretty">
          <h1 className="text-3xl text-center md:text-5xl font-bold text-lightSky">My Services</h1>
          <h4 className="text-center text-white/70 text-lg md:text-xl mt-2">I specialize in creating innovative and user-centered solutions. With a solid background in computer science and hands-on experience in full-stack web and mobile app development, I’m passionate about building software that makes a positive impact.</h4>
        </div>
        {/* Services Cards */}
        <Container className="py-20  md:grid md:grid-cols-2 gap-10">
          {servicesData?.map((item, index) => (
            <div key={index} className="mb-8 text-pretty border bg-lightSky/5  border-lightSky/20 p-6 rounded-lg overflow-hidden">
              {/* Dynamically display service  title, icon and description */}
              
              <div className="flex justify-between mt-2">
                <h2 className="text-2xl font-bold text-lightSky/80 ">{item.title}</h2>
                <item.icon className="text-lightSky  md:flex text-2xl" />
              </div>
              <Separator className="my-2 bg-lightSky/80 opacity-30 "/>
              <p className="text-white/80 mt-2">{item.description}</p>
              <div className="mt-4">
                <Button className="mt-3 bg-lightSky text-bodyColor hover:bg-lightSky/80 w-full ">
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </Container>
      </Container>
    </div>
  );
}
