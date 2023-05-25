import { Col, Row } from "antd";
import React, { useRef, useState } from "react";
import CardInfo from "../CardInfo";
import paymentImg from "../../assets/images/image 3.png";
import "../../App.css";
import "./listCard.css";
import { eventDetailProp, eventProp } from "../../propType";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useAppSelector } from "../../app/store";

// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../../firebase";
// import { addEvents } from "../../firebase/controller";

type listCardProps = {
  type: "payment" | "event";
};

const ListCards = ({ type }: listCardProps) => {
  const paymentList: eventProp[] | eventDetailProp[] = [
    {
      id: "1",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "2",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "3",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "4",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
  ];

  const dataEvent = useAppSelector((state) => state.events);

  const listRef = useRef<HTMLDivElement>(null!);
  const [slideNumber, setSlideNumber] = useState(0);

  // const [thumbnailFile, setThumnailFile] = useState<File | undefined>();
  // const [eventData, setEventData] = useState<eventDetailProp>({
  //   title: "Sự kiện 1",
  //   mainImage: "",
  //   price: 25000,
  //   address: "Đầm sen park",
  //   date: "30/05/2021 - 01/06/2021",
  //   imageDetail1: "",
  //   imageDetail2: "",
  //   contentDetail1:
  //     "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic sdsd typesetting,remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.",
  //   contentDetail2:
  //     "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,",
  //   contentDetail3:
  //     "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,",
  // });

  //upload image to firebase
  // const uploadImage = () => {
  //   if (thumbnailFile) {
  //     const imageRef = ref(storage, `images/${thumbnailFile.name}`);
  //     const uploadTask = uploadBytesResumable(imageRef, thumbnailFile);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log(progress);
  //       },
  //       (err) => {
  //         console.log(err);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setEventData((prev) => {
  //             return {
  //               ...prev,
  //               mainImage: downloadURL,
  //               imageDetail1: downloadURL,
  //               imageDetail2: downloadURL,
  //             };
  //           });
  //         });
  //       }
  //     );
  //   }
  // };

  //handle select image file
  // const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setThumnailFile(event?.target?.files?.[0]);
  // };

  const handleClickArrow = (direction: string) => {
    let distance = listRef.current?.getBoundingClientRect().x - 120;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${270 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-270 + distance}px)`;

      //add event data to firebase
      // addEvents(eventData);
    }
  };

  return (
    <div className="px-30 list-card">
      {/* <input type="file" onChange={handleFileSelect} />
      <button onClick={uploadImage}>upload</button> */}
      <span className="arrow-left" onClick={() => handleClickArrow("left")}>
        <BiLeftArrow />
      </span>
      <Row
        gutter={16}
        style={{ width: "100%" }}
        className="cover-list"
        ref={listRef}
      >
        {(type === "event" ? dataEvent.events : paymentList).map((card) => (
          <Col span={6} key={card.id}>
            <CardInfo card={card} type={type} />
          </Col>
        ))}
      </Row>
      <span className="arrow-right" onClick={() => handleClickArrow("right")}>
        <BiRightArrow />
      </span>
    </div>
  );
};

export default ListCards;
