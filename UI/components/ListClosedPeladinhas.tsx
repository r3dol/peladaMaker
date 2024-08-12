import { Image, View, Text, FlatList, Pressable } from "react-native";
import images from "@/constants/affirmation-images";
import { Link } from "expo-router";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { useRouter } from 'expo-router'


export interface GalleryPreviewData {
    id: number;
    text: string;
    image: any;
    createdBy: string;
}

interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const ListClosedPeladinhas = ({
    title,
    products,
}: GuidedAffirmationsGalleryProps) => {
    const router = useRouter();
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white font-bold text-xl text-right">{title}</Text>
            </View>
            <View className="space-y-2">
                <FlatList
                    data={products}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        //<Link href={`/ListOpenPeladinhas/${item.id}`} asChild>
                            <Pressable>
                                <View className="h-36 w-36 rounded-md mr-4">
                                    {/* <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    /> */}
                                    {/* <Text>{item.createdBy}</Text> */}
                                    <CustomButton textStyles='font-normal' containerStyles
                                        onPress={() => router.push(`/ListClosedPeladinhas/${item.id}`)} 
                                        title={`Peladinha from ${item.createdBy}`}/>
                                </View>
                            </Pressable>
                      //  </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    );
};

export default ListClosedPeladinhas;