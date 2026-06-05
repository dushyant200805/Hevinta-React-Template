import CommonBannersection from "../../components/common-section/CommonBanner";
import Newsletter from "../../components/common-section/Newsletter";
import ContactForm from "./ContactFrom";
import EmailAlertMessage from "../../components/Ui/EmailAlertMessage";
function Contact() {
  const BannerData = {
    "BannerHeading": "get in touch",
    "SubHeading": "Contact Us",
    "Description": "We’d love to hear from you. Reach out to us for support, partnerships, or any general inquiries."
  }
  return (
    <>
      <title>Contact Us | Hevinta NGO & Trust</title>
      {/* contact form section */}
      <CommonBannersection BannerData={BannerData} />
      <EmailAlertMessage />
      <ContactForm />
      <Newsletter />

    </>
  );
}

export default Contact;