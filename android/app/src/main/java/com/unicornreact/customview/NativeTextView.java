package com.unicornreact.customview;

import android.content.Context;
import android.graphics.Color;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.widget.AppCompatTextView;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.FrameLayout;

import com.unicornreact.R;

/**
 * Created by lvhtr_000 on 3/20/2018.
 */

public class NativeTextView extends FrameLayout {
    private AppCompatTextView mTextView;

    public NativeTextView(@NonNull Context context) {
        super(context);

        init(context);
    }

    public NativeTextView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);

        init(context);
    }

    public NativeTextView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);

        init(context);
    }

    private void init(Context context) {
        LayoutInflater.from(context).inflate(R.layout.native_text_view, this, true);

        mTextView = findViewById(R.id.native_text_view);

        setBackgroundColor(Color.MAGENTA);
    }

    public void setText(@Nullable CharSequence text) {
        mTextView.setText(text);
    }

    public CharSequence getText() {
        return mTextView.getText();
    }
}
