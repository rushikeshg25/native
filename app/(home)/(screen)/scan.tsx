import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SegmentedButtons } from 'react-native-paper';

const BUTTONS = [
  {
    value: 'scan',
    label: 'Scan',
  },
  {
    value: 'qr',
    label: 'My QR',
  },
];

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [view, setView] = useState('scan');
  const [barcodeResult, setBarcodeResult] = useState('');

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className='flex flex-col items-center justify-center h-full gap-5 '>
        <Text className='text-lg dark:text-gray-300'>
          Allow camera access to scan QR code
        </Text>
        <Button onPress={requestPermission} mode='contained-tonal'>
          Grant Permission
        </Button>
      </View>
    );
  }

  return (
    <View className='flex flex-col items-center justify-center h-full gap-10 '>
      {view === 'scan' ? (
        <View className='border border-gray-400 '>
          <CameraView
            barcodeScannerSettings={{
              barcodeTypes: ['qr'],
            }}
            onBarcodeScanned={(BarcodeData) => {
              setBarcodeResult(BarcodeData.data);
            }}
            className='flex w-5/6 border aspect-square'
            facing={'back'}
          >
            <View className='flex-1'></View>
          </CameraView>
        </View>
      ) : (
        <View>
          <View className='flex items-center justify-center w-5/6 border border-gray-400 aspect-square'>
            <View className='flex items-center justify-center flex-1'>
              <Text className='text-3xl text-white'>QR Code for User</Text>
            </View>
          </View>
        </View>
      )}
      <SafeAreaView className='w-1/2'>
        <SegmentedButtons
          value={view}
          onValueChange={setView}
          buttons={BUTTONS}
        />
      </SafeAreaView>
      <Text className='text-2xl text-white'>{barcodeResult}</Text>
    </View>
  );
}
