import React from "react";
import {
    View,
    TextInputProps as ReactNativeTextInputProps,
} from "react-native";
import {
    HelperText,
    TextInput as ReactNativePaperTextInput,
} from "react-native-paper";

interface TextInputProps extends ReactNativeTextInputProps {
    caption?: string;
    errorMessage?: boolean | string;
    leftText?: string;
    label?: string;
    right?: React.ReactNode;
    size?: string;
    variant?: string;
    name?: string;
    testID?: string;
}

const TextInput = (props: TextInputProps) => {
    const { caption, errorMessage = false, leftText } = props;

    return (
        <View>
            {/*
             * added to get past TS issues with react-native paper
             * @ts-ignore */}
            <ReactNativePaperTextInput
                {...props}
                mode="outlined"
                disabled={false}
                style={{ backgroundColor: "white" }}
                error={!!errorMessage}
                activeUnderlineColor={"#595959"}
                activeOutlineColor={"#595959"}
                // added to get past TS issues with react-native paper
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                left={
                    leftText && (
                        <ReactNativePaperTextInput.Affix text={leftText} />
                    )
                }
            />

            {errorMessage ? (
                // @ts-ignore
                <HelperText
                    type="error"
                    visible={!!errorMessage}
                    testID={`${props.testID}-error`}
                >
                    {errorMessage}
                </HelperText>
            ) : (
                // @ts-ignore
                <HelperText type="info" visible={!!caption}>
                    {caption}
                </HelperText>
            )}
        </View>
    );
};

export default TextInput;
