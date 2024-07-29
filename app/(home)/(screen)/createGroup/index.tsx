// import { Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { useRouter } from 'expo-router';
// import { Button, TextInput } from 'react-native-paper';
// import Toast from 'react-native-root-toast';
// import { Image } from 'expo-image';
// import PageWrapperView from '@/components/PageWrapperView';
// import { cn } from '@/utils/tw-merge';
// import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import { useTheme } from 'react-native-paper';

// const index = () => {
//   const [imageURL, setImageURL] = useState<string>('');
//   const [title, setTitle] = useState<string>('');
//   const router = useRouter();
//   const { dark } = useTheme();

//   const handleGroupCreate = () => {
//     try {
//       //hit creation API
//       Toast.show('Group created successfully', {
//         duration: Toast.durations.SHORT,
//         position: Toast.positions.BOTTOM,
//         animation: true,
//         hideOnPress: true,
//         delay: 0,
//       });
//       router.push('/group');
//     } catch (error) {
//       console.log(error);
//       Toast.show('Something went wrong! Please try again', {
//         duration: Toast.durations.SHORT,
//         position: Toast.positions.BOTTOM,
//         animation: true,
//         hideOnPress: true,
//         delay: 0,
//       });
//     }
//   };
//   return (
//     <PageWrapperView classname='flex w-full h-full '>
//       <View className='flex flex-col items-center justify-center w-full gap-5 h-2/6'>
//         <View className='flex flex-row justify-center w-full h-20 gap-3'>
//           <View className='flex items-center justify-center w-16 h-16 border rounded-lg border-border-light dark:border-border-dark'>
//             {/* //Image Upload */}
//             {imageURL ? (
//               <Image
//                 source={{ uri: imageURL }}
//                 className='w-full h-full'
//                 style={{ borderRadius: 10 }}
//               />
//             ) : (
//               <View className='flex items-center justify-center w-2/3 h-full'>
//                 {dark ? (
//                   <MaterialCommunityIcons
//                     name='image-plus'
//                     size={24}
//                     color='rgb(150, 142, 152)'
//                   />
//                 ) : (
//                   <MaterialCommunityIcons
//                     name='image-plus'
//                     size={24}
//                     color='rgb(220, 214, 222)'
//                   />
//                 )}
//               </View>
//             )}
//           </View>
//           <View
//             className={cn('flex items-center justify-center w-2/3', {
//               'border-red-500': title.length > 20,
//             })}
//           >
//             <TextInput
//               label={
//                 <Text
//                   style={
//                     title.length > 20
//                       ? { color: 'red', fontSize: 12 }
//                       : { fontSize: 12 }
//                   }
//                 >
//                   {title.length > 20 ? (
//                     <Text>Title is too long</Text>
//                   ) : (
//                     <Text>Group Title</Text>
//                   )}
//                 </Text>
//               }
//               mode='flat'
//               onChangeText={(e) => setTitle(e)}
//               value={title}
//               className='w-full p-0 m-0 text-black dark:text-white'
//               style={{ padding: 0, margin: 0, height: 60 }}
//             />
//           </View>
//         </View>
//         <View className='flex items-center justify-center w-full'>
//           <Text className='text-black dark:text-white'>Type</Text>
//         </View>
//         <Button
//           onPress={handleGroupCreate}
//           disabled={title.length > 20}
//           mode='contained-tonal'
//         >
//           <Text className='dark:text-white'>Create</Text>
//         </Button>
//       </View>
//     </PageWrapperView>
//   );
// };

// export default index;
