import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Rating, Stack, Typography } from "@mui/material";
import NoPath from "../../../assets/NoPath.png";
import cardImg from "../../../assets/cardimg.png";
import { cardInfo } from "../../../utils/data";

export default function SimpleSlider({ image, card }) {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
    };

    return (
        <>
            {image && (
                <Slider {...settings} style={{ width: "100%" }}>
                    <Box>
                        <img src={NoPath} alt="NoPath" style={{ width: "100%" }} />
                    </Box>
                    <Box>
                        <img src={NoPath} alt="NoPath" style={{ width: "100%" }} />
                    </Box>
                </Slider>
            )}
            {card && (
                <Slider {...settings} style={{ width: "100%" }}>
                    {cardInfo?.map((card, index) => {
                        return (
                            <Stack
                                key={card.id}
                                sx={{
                                    boxShadow: " 0px 0px 10px 0px #00000029",
                                }}
                            >
                                <Stack
                                    key={card.id}
                                    direction="row"
                                    sx={{
                                        justifyContent: 'space-between',
                                        p: 2
                                    }}
                                >
                                    <Box sx={{ width: "30%" }}>
                                        <img
                                            src={cardImg}
                                            alt="cardImg"
                                            style={{ width: "100%" }}
                                        />
                                    </Box>
                                    <Stack sx={{ width: "65%", flexDirection: "column" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{ fontWeight: 600, color: "#3B3A3A" }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{my:1, fontWeight: 600, color: "#8F8F8F" }}
                                        >
                                            {card.subTitle}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            sx={{ mb:1,color: "#8F8F8F" }}
                                        >
                                            {card.info}
                                        </Typography>
                                        <Rating name="read-only"
                                            sx={{ color: "#CB48F9" ,fontSize:'14px' }}
                                            value={card.rating} readOnly />
                                    </Stack>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Slider>
            )}
        </>
    );
}
