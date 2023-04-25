import React from 'react'
import {Caption, Headline, Paragraph, Subheading, Title, Text, FAB} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import { Platform, StyleSheet, View } from 'react-native';
import { useExampleTheme } from '..';
import ScreenWrapper from '../../ScreenWrapper';

type FABVariant = 'primary' | 'secondary' | 'tertiary' | 'surface';
type FABSize = 'small' | 'medium' | 'large';
type FABMode = 'flat' | 'elevated';

type Props = {
    navigation: StackNavigationProp<{ [key: string]: undefined }>;
};
export default function ExampleList({ navigation }: Props) {
    const [visible, setVisible] = React.useState<boolean>(true);
    const [open, setOpen] = React.useState<boolean>(false);
    const { isV3 } = useExampleTheme();

    const variants = ['Top Up', 'Cash Out', 'Pay Bill', 'Pay Contact'];
    const sizes = ['small', 'medium', 'large'];
    const modes = ['flat', 'elevated'];
    const _icon = ['plus', 'cash-multiple', 'receipt', 'account-box-outline']

    return (

        <ScreenWrapper>
            <View style={styles.container}>

                <Text style={styles.text} variant="headlineLarge">
                    TTD $1,039.78
                </Text>
                    <View style={styles.row}>
                        {variants.map((variant, index) => (
                            <View style={styles.fabVariant} key={variant}>
                                <FAB
                                    icon={_icon[index]}
                                    style={styles.fab}
                                    onPress={() => {}}
                                    visible={visible}
                                    variant={variant as FABVariant}
                                />
                                {visible && <Text variant="bodyMedium">{variant}</Text>}
                            </View>
                        ))}
                    </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    text: {
        marginVertical: 4,
    },
    row: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    fab: {
        margin: 8,
        borderRadius: 100,
        backgroundColor: '#B34AFF',
    },
    fabVariant: {
        flex: 1,
        borderRadius: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
