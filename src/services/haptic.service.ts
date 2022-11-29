import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

export class HapticFeedbackService {

    public static triggerLight() {
        ReactNativeHapticFeedback.trigger("impactLight", options);
    }

    public static triggerMedium() {
        ReactNativeHapticFeedback.trigger("impactMedium", options);
    }

    public static triggerHeavy() {
        ReactNativeHapticFeedback.trigger("impactHeavy", options);
    }
}

export default HapticFeedbackService;
