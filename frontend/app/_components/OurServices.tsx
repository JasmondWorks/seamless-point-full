import React from "react";

const services = [
  {
    title: "Shipping Services",
    desc: `Effortlessly send parcels locally, nationwide, or internationally to your customers and loved ones. Our platform makes it easy for you to sign up, book shipments, and get your packages moving in no time. Experience seamless logistics tailored to your needs.`,
    icon: (
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.25 51.5625L40.625 54.6875C40.625 54.6875 64.0625 50 67.1875 50C70.3125 50 70.3125 53.125 67.1875 56.25C64.0625 59.375 53.125 68.75 43.75 68.75C34.375 68.75 28.125 64.0625 21.875 64.0625H6.25"
          stroke="#0DACED"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 45.3125C9.375 42.1875 15.625 37.5 21.875 37.5C28.125 37.5 42.9688 43.75 45.3125 46.875C47.6562 50 40.625 54.6875 40.625 54.6875M25 28.125V15.625C25 14.7962 25.3292 14.0013 25.9153 13.4153C26.5013 12.8292 27.2962 12.5 28.125 12.5H65.625C66.4538 12.5 67.2487 12.8292 67.8347 13.4153C68.4208 14.0013 68.75 14.7962 68.75 15.625V40.625"
          stroke="#0DACED"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.0625 12.5H54.6875V26.5625H39.0625V12.5Z"
          stroke="#0DACED"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Doorstep Delivery",
    desc: `Enjoy the convenience of having your shipments delivered right to your doorstep with our express shipping option. Say goodbye to hassle and delays – we make sure your deliveries are quick, reliable, and stress-free.
`,
    icon: (
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.375 37.5H37.5V42.1875H9.375V37.5ZM4.6875 25.7812H28.125V30.4688H4.6875V25.7812Z"
          fill="#0DACED"
        />
        <path
          d="M70.1226 38.9203L63.0914 22.5141C62.9107 22.0926 62.6103 21.7333 62.2274 21.4809C61.8446 21.2284 61.3961 21.0938 60.9375 21.0938H53.9062V16.4062C53.9062 15.7846 53.6593 15.1885 53.2197 14.749C52.7802 14.3094 52.1841 14.0625 51.5625 14.0625H14.0625V18.75H49.2187V48.1781C48.1514 48.7991 47.2172 49.6248 46.4699 50.6078C45.7226 51.5908 45.1769 52.7117 44.864 53.9062H30.1359C29.5654 51.6969 28.2088 49.7714 26.3203 48.4908C24.4317 47.2101 22.1409 46.6622 19.8773 46.9497C17.6137 47.2372 15.5326 48.3405 14.0242 50.0526C12.5158 51.7647 11.6836 53.9682 11.6836 56.25C11.6836 58.5318 12.5158 60.7353 14.0242 62.4474C15.5326 64.1595 17.6137 65.2628 19.8773 65.5503C22.1409 65.8378 24.4317 65.2899 26.3203 64.0092C28.2088 62.7286 29.5654 60.8031 30.1359 58.5938H44.864C45.3739 60.6052 46.5399 62.3893 48.1776 63.6637C49.8153 64.9381 51.8311 65.63 53.9062 65.63C55.9813 65.63 57.9972 64.9381 59.6349 63.6637C61.2725 62.3893 62.4385 60.6052 62.9484 58.5938H67.9687C68.5903 58.5938 69.1865 58.3468 69.626 57.9073C70.0655 57.4677 70.3125 56.8716 70.3125 56.25V39.8438C70.3124 39.5263 70.2478 39.2121 70.1226 38.9203ZM21.0937 60.9375C20.1666 60.9375 19.2603 60.6626 18.4895 60.1475C17.7186 59.6324 17.1178 58.9004 16.763 58.0438C16.4082 57.1873 16.3154 56.2448 16.4963 55.3355C16.6771 54.4262 17.1236 53.591 17.7791 52.9354C18.4347 52.2799 19.2699 51.8334 20.1792 51.6526C21.0885 51.4717 22.031 51.5645 22.8875 51.9193C23.7441 52.2741 24.4762 52.8749 24.9912 53.6458C25.5063 54.4166 25.7812 55.3229 25.7812 56.25C25.7812 57.4932 25.2873 58.6855 24.4083 59.5646C23.5292 60.4436 22.3369 60.9375 21.0937 60.9375ZM53.9062 25.7812H59.3906L64.4156 37.5H53.9062V25.7812ZM53.9062 60.9375C52.9791 60.9375 52.0728 60.6626 51.302 60.1475C50.5311 59.6324 49.9303 58.9004 49.5755 58.0438C49.2207 57.1873 49.1279 56.2448 49.3088 55.3355C49.4897 54.4262 49.9361 53.591 50.5916 52.9354C51.2472 52.2799 52.0824 51.8334 52.9917 51.6526C53.901 51.4717 54.8435 51.5645 55.7 51.9193C56.5566 52.2741 57.2887 52.8749 57.8037 53.6458C58.3188 54.4166 58.5937 55.3229 58.5937 56.25C58.5937 57.4932 58.0998 58.6855 57.2208 59.5646C56.3417 60.4436 55.1494 60.9375 53.9062 60.9375ZM65.625 53.9062H62.9484C62.4321 51.8987 61.2643 50.1192 59.6279 48.8467C57.9915 47.5742 55.9791 46.8808 53.9062 46.875V42.1875H65.625V53.9062Z"
          fill="#0DACED"
        />
      </svg>
    ),
  },
  {
    title: "Professional Services",
    desc: `Connect with skilled professionals for all your essential service needs. Whether you're looking for technicians, home service providers, or other specialists, our platform connects you with trusted experts, making it easier to get things done.`,
    icon: (
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75 14.0625V60.9375H0V14.0625H23.4375V9.375C23.4375 8.71582 23.5596 8.10547 23.8037 7.54395C24.0479 6.98242 24.3774 6.49414 24.7925 6.0791C25.2075 5.66406 25.708 5.32227 26.2939 5.05371C26.8799 4.78516 27.4902 4.66309 28.125 4.6875H46.875C47.5342 4.6875 48.1445 4.80957 48.7061 5.05371C49.2676 5.29785 49.7559 5.62744 50.1709 6.04248C50.5859 6.45752 50.9277 6.95801 51.1963 7.54395C51.4648 8.12988 51.5869 8.74023 51.5625 9.375V14.0625H75ZM28.125 14.0625H46.875V9.375H28.125V14.0625ZM4.6875 18.75V25.5249L28.125 37.207V32.8125H46.875V37.207L70.3125 25.5249V18.75H4.6875ZM32.8125 37.5V42.1875H42.1875V37.5H32.8125ZM70.3125 56.25V30.7251L46.875 42.4805V46.875H28.125V42.4805L4.6875 30.7251V56.25H70.3125Z"
          fill="#0DACED"
        />
      </svg>
    ),
  },
  {
    title: "Payment Solutions",
    desc: `Paying your utility bills has never been easier. Our platform allows you to conveniently settle bills for electricity, TV subscriptions, airtime top-ups, and more – all in one place. Simplify your life with hassle-free payment services.`,
    icon: (
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.875 12.5C15 12.5 9.375 18.125 9.375 25C9.375 31.875 15 37.5 21.875 37.5C28.75 37.5 34.375 31.875 34.375 25C34.375 18.125 28.75 12.5 21.875 12.5ZM21.875 31.25C18.4375 31.25 15.625 28.4375 15.625 25C15.625 21.5625 18.4375 18.75 21.875 18.75C25.3125 18.75 28.125 21.5625 28.125 25C28.125 28.4375 25.3125 31.25 21.875 31.25ZM21.875 43.75C9.6875 43.75 0 49.375 0 56.25V62.5H34.375V56.25H6.25C6.25 54.375 11.875 50 21.875 50C27.5 50 31.875 51.5625 34.375 53.125V46.25C30.9375 44.6875 26.5625 43.75 21.875 43.75ZM68.75 12.5H46.875C43.4375 12.5 40.625 15.3125 40.625 18.75V56.25C40.625 59.6875 43.4375 62.5 46.875 62.5H68.75C72.1875 62.5 75 59.6875 75 56.25V18.75C75 15.3125 72.1875 12.5 68.75 12.5ZM50 56.25H46.875V18.75H50V56.25ZM68.75 56.25H56.25V18.75H68.75V56.25Z"
          fill="#0DACED"
        />
      </svg>
    ),
  },
  {
    title: "Community Development Initiatives",
    desc: `We’re committed to supporting community development. Our platform promotes various projects from individuals, corporations, NGOs, and government agencies, helping drive positive change in local communities.
`,
    icon: (
      <svg
        width={75}
        height={75}
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.875 56.25V53.125C21.875 48.981 23.5212 45.0067 26.4515 42.0765C29.3817 39.1462 33.356 37.5 37.5 37.5M37.5 37.5C41.644 37.5 45.6183 39.1462 48.5485 42.0765C51.4788 45.0067 53.125 48.981 53.125 53.125V56.25M37.5 37.5C39.9864 37.5 42.371 36.5123 44.1291 34.7541C45.8873 32.996 46.875 30.6114 46.875 28.125C46.875 25.6386 45.8873 23.254 44.1291 21.4959C42.371 19.7377 39.9864 18.75 37.5 18.75C35.0136 18.75 32.629 19.7377 30.8709 21.4959C29.1127 23.254 28.125 25.6386 28.125 28.125C28.125 30.6114 29.1127 32.996 30.8709 34.7541C32.629 36.5123 35.0136 37.5 37.5 37.5ZM3.125 56.25V53.125C3.125 50.6386 4.11272 48.254 5.87087 46.4959C7.62903 44.7377 10.0136 43.75 12.5 43.75M12.5 43.75C14.1576 43.75 15.7473 43.0915 16.9194 41.9194C18.0915 40.7473 18.75 39.1576 18.75 37.5C18.75 35.8424 18.0915 34.2527 16.9194 33.0806C15.7473 31.9085 14.1576 31.25 12.5 31.25C10.8424 31.25 9.25268 31.9085 8.08058 33.0806C6.90848 34.2527 6.25 35.8424 6.25 37.5C6.25 39.1576 6.90848 40.7473 8.08058 41.9194C9.25268 43.0915 10.8424 43.75 12.5 43.75ZM71.875 56.25V53.125C71.875 50.6386 70.8873 48.254 69.1291 46.4959C67.371 44.7377 64.9864 43.75 62.5 43.75M62.5 43.75C64.1576 43.75 65.7473 43.0915 66.9194 41.9194C68.0915 40.7473 68.75 39.1576 68.75 37.5C68.75 35.8424 68.0915 34.2527 66.9194 33.0806C65.7473 31.9085 64.1576 31.25 62.5 31.25C60.8424 31.25 59.2527 31.9085 58.0806 33.0806C56.9085 34.2527 56.25 35.8424 56.25 37.5C56.25 39.1576 56.9085 40.7473 58.0806 41.9194C59.2527 43.0915 60.8424 43.75 62.5 43.75Z"
          stroke="#0DACED"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
export default function OurServices() {
  return (
    <div className="bg-brandPryLight">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-x-24 py-10">
          {services.map((service) => (
            <div
              style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.12)" }}
              className="flex justify-between max-w-xl md:max-w-[330px] flex-col items-center rounded-2xl p-8 space-y-10 text-center bg-white relative"
              key={service.title}
            >
              <div className="flex flex-col gap-10 items-center">
                <span>{service.icon}</span>
                <h3 className="text-2xl font-medium">{service.title}</h3>
              </div>
              <p className="text-sm font-medium text-neutral-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
