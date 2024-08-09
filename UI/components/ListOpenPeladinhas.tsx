import { Image, View, Text, FlatList, Pressable } from "react-native";
import images from "@/constants/affirmation-images";
import { Link } from "expo-router";
import React from "react";

export interface GalleryPreviewData {
    id: number;
    text: string;
    image: any;
}

interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}

const ListOpenPeladinhas = ({
    title,
    products,
}: GuidedAffirmationsGalleryProps) => {
    return (
        <View className="my-5">
            <View className="mb-2">
                <Text className="text-white font-bold text-xl">{title}</Text>
            </View>
            <View className="space-y-2">
                <FlatList
                    data={products}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <Link href={`/ListOpenPeladinhas/${item.id}`} asChild>
                            <Pressable>
                                <View className="h-36 w-32 rounded-md mr-4">
                                    <Image
                                        source={item.image}
                                        resizeMode="cover"
                                        className="w-full h-full"
                                    />
                                    <Text>ProductGallery</Text>
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    );
};

export default ListOpenPeladinhas;