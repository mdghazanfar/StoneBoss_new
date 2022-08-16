import React, {useState} from 'react';
import {View, TextInput, Modal, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Components Called
import BlankSpacer from '../../../Components/BlankSpace';
import Button from '../../../Components/Button';
import {Colors, fonts, Images} from '../../../Components/Theme';

interface ModalComponentProps {
  modalVisible: boolean;
  setModalVisible: any;
}

/**
 *ModalComponent is a function for building modal
 * @param {modalVisible, setModalVisible}
 * @returns modal
 */
export default function ModalComponent({
  modalVisible,
  setModalVisible,
}: ModalComponentProps) {
  const [count, setCount] = useState<string>('');
  console.log(count);

  const increment = () => {
    setCount(prevValue => prevValue + 1);
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}>
          <View
            style={{
              width: wp(95),
              height: hp(40),
              borderRadius: 4,
              backgroundColor: Colors.black,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                width: wp(83),
                height: hp(5),
              }}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image source={Images.close} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: wp(90),
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: Colors.lightgray,
                justifyContent: 'center',
                borderRadius: wp(0.5),
                height: hp(8),
              }}>
              <TextInput
                placeholder="Barcode"
                placeholderTextColor={Colors.white}
                style={{
                  paddingLeft: 11,
                  width: wp(78),
                  marginTop: wp(0.1),
                  color: Colors.white,
                  fontFamily: fonts.Montserrat,
                }}
              />
              <Image
                source={Images.barcode}
                style={{
                  width: wp(7),
                  height: wp(7),
                }}
                resizeMode="contain"
              />
            </View>
            <BlankSpacer height={hp(3)} />

            <View
              style={{
                flexDirection: 'row',
                width: wp(90),
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: Colors.lightgray,
                justifyContent: 'center',
                borderRadius: wp(0.5),
                height: hp(8),
              }}>
              <TextInput
                placeholder="Quantity"
                placeholderTextColor={Colors.white}
                keyboardType="number-pad"
                style={{
                  paddingLeft: 11,
                  width: wp(78),
                  marginTop: wp(0.1),
                  color: Colors.white,
                  fontFamily: fonts.Montserrat,
                }}
                value={count}
                onChangeText={setCount}
              />
              <View>
                <TouchableOpacity onPress={() => increment()}>
                  <Image
                    source={Images.pathUp}
                    style={{
                      width: wp(4),
                      height: wp(4),
                      tintColor: Colors.white,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Image
                  source={Images.pathDown}
                  style={{
                    width: wp(4),
                    height: wp(4),
                    tintColor: Colors.white,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
            <BlankSpacer height={hp(3)} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                width: wp(83),
              }}>
              <Button
                text="CONTINUE"
                height={hp(7)}
                width={wp(40)}
                color={Colors.lightBlue}
                textColor={Colors.white}
                textFontFamily={fonts.Montserrat}
              />
              <Button
                text="CANCEL"
                height={hp(7)}
                width={wp(40)}
                color={Colors.buttonRed}
                textColor={Colors.white}
                textFontFamily={fonts.Montserrat}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}