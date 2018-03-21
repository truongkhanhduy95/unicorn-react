package com.unicornreact.packager;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.unicornreact.customview.NativeTextViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by lvhtr_000 on 3/19/2018.
 */

public class NativeModulePackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new NativeTextViewManager());
    }
}
