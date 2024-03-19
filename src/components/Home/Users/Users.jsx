import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Carousel from "../../Common/Carousel/Carousel";
import SectionInfo from "../../Common/SectionInfo/SectionInfo";
import { recordData } from "../../../utils/data";
export default function Users() {
    return (
        <Stack>
            <Container
                maxWidth="md"
                sx={{
                    my: 5,
                    // border: 2,
                }}
            >
                <Stack justifyContent="center" alignItems="center">
                    <Typography
                        variant="h4"
                        sx={{ mb: "60px", color: "#3B3A3A", fontWeight: 700 }}
                    >
                        Don't Just Take <br /> our Word for it!
                    </Typography>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        sx={{
                            // border: 1,
                            width: "75%",
                            justifyContent: { md: "space-between", xs: "center" },
                            alignItems: "center",
                        }}
                    >
                        {recordData.map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{ my: 1 }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 800,
                                            color: "#FF6057",
                                        }}
                                    >
                                        {item.number}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontWeight: 700, color: "#3B3A3A" }}
                                    >
                                        {item.title}{" "}
                                    </Typography>
                                </Stack>
                            );
                        })}
                    </Stack>

                    {/* card slider */}
                    <Stack
                        direction={{ xs: "column", md: "row", border: 1 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            sx={{
                                width: "50%",
                            }}
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    my: 4,
                                    width: "350px",
                                    // border: 2,
                                    borderColor: "red",
                                }}
                            >
                                <Carousel card={true} />
                            </Stack>
                        </Stack>
                        <Stack
                            sx={{ mt:4,width: { md: "50%", xs: "70%" }, }}>
                            <SectionInfo
                                title={"Grow Your Business andJoin Our Happy Users"}
                                gradiantBtn={true}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    );
}
