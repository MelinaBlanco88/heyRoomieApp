import React from "react";
import { AspectRatio, Stack, Image, Center, Heading, HStack, Box, Text } from "native-base";
import { styles } from '../../assets/css/styles.js';
import { TouchableOpacity } from 'react-native';

export const RoomItem = ({
	id,
	name,
	description,
	country,
	city,
	price,
	imgSrc, 
	room, 
	onSelected
}) => {
	return (
		<TouchableOpacity onPress={() => onSelected(room)}>
			<Box style={styles.boxRooms}
				maxW='80'
				rounded='lg'
				overflow='hidden'
				borderColor='coolGray.200'
				borderWidth='1'
				_dark={{
					borderColor: "coolGray.600",
					backgroundColor: "gray.700",
				}}
				_web={{
					shadow: 2,
					borderWidth: 0,
				}}
				_light={{
					backgroundColor: "gray.50",
				}}
			>
				<Box>
					<AspectRatio w='100%' ratio={16 / 9}>
						<Image
							source={{
								uri: imgSrc,
							}}
							alt='image'
						/>
					</AspectRatio>
					<Center
						bg='violet.500'
						_dark={{
							bg: "violet.400",
						}}
						_text={{
							color: "warmGray.50",
							fontWeight: "700",
							fontSize: "xs",
						}}
						position='absolute'
						bottom='0'
						px='6'
						py='1.5'
						display='flex'
						flexDirection='row'
					>
						$ {price}
					</Center>
				</Box>
				<Stack p='4' space={3}>
					<Stack space={2}>
						<Heading size='md' ml='-1'>
							{name}
						</Heading>
						<Text
							fontSize='xs'
							_light={{
								color: "violet.500",
							}}
							_dark={{
								color: "violet.400",
							}}
							fontWeight='500'
							ml='-0.5'
							mt='-1'
						>
							{country}, {city}
						</Text>
					</Stack>
					<Text fontWeight='400'>
					{description}
					</Text>
					<HStack alignItems='center' space={4} justifyContent='space-between'>
						<HStack alignItems='center'>
							<Text
								color='coolGray.600'
								_dark={{
									color: "warmGray.200",
								}}
								fontWeight='400'
							>
								{price}
							</Text>
						</HStack>
					</HStack>
				</Stack>
			</Box>
		</TouchableOpacity>
	);
};