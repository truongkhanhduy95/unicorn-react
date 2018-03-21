package com.unicornreact.customview;

import android.content.Context;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

/**
 * Created by lvhtr_000 on 3/19/2018.
 */

public class NativeTextViewManager extends SimpleViewManager<NativeTextView> {

    private NativeTextView mTextView;

    @Override
    public String getName() {
        return "NativeTextView";
    }

    @Override
    protected NativeTextView createViewInstance(ThemedReactContext reactContext) {
        return getTextView(reactContext);
    }

    private NativeTextView getTextView(Context context) {
        if (mTextView == null) {
            mTextView = new NativeTextView(context);
            mTextView.setText("123");
        }
        return mTextView;
    }

    @ReactProp(name = "text")
    public void setText(NativeTextView textView, @Nullable String value) {
        textView.setText(value);
    }
}
