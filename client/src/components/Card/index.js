import React from "react";

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

const productCard = () => ({
  image,
  title,
  description
}) =>
  <Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={image} />
      <Box px={2}>
        <Heading as='h3'>
          {title}
        </Heading>
        <Text fontSize={0}>
          {description}
        </Text>
        {/* <div>

        </div>
        <Text fontSize={0}>
          {quantityNumber}
        </Text>
        <Text fontSize={0}>
          {stockNumber}
        </Text> */}
      </Box>
    </Card>
  </Box>

export default productCard;