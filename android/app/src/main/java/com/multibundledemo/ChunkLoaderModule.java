package com.multibundledemo;

import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.TimeUnit;

public class ChunkLoaderModule extends ReactContextBaseJavaModule {

    public ChunkLoaderModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public static String copyAsyncJsToFs(Context context, String assetsFileName) {
        try {
            InputStream assetStream = context.getAssets().open(assetsFileName);
            File file = new File(context.getCacheDir(), assetsFileName);
            if (file.exists()) {
                file.delete();
                file.createNewFile();
            }
            FileOutputStream fileOutputStream = new FileOutputStream(file);

            byte[] buf = new byte[1024];
            while (true) {
                int read = assetStream.read(buf);
                if (read == -1) {
                    break;
                }
                fileOutputStream.write(buf, 0, read);
            }
            fileOutputStream.flush();
            assetStream.close();
            fileOutputStream.close();
            return file.getPath();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @NonNull
    @Override
    public String getName() {
        return "ChunkLoader";
    }


    @ReactMethod
    public void loadChunk(int moduleId, Promise promise) {
        try {
            Thread.sleep(TimeUnit.SECONDS.toMillis(5));
        } catch (InterruptedException e) {
            Log.e("ERR", "Interrupted Err", e);
        }
        ReactApplicationContext reactApplicationContext = this.getReactApplicationContext();
        CatalystInstance catalystInstance = reactApplicationContext.getCatalystInstance();
        String assetURL = "chunk-" + moduleId + ".bundle";
        String fileUrl = copyAsyncJsToFs(reactApplicationContext, assetURL);
        catalystInstance.loadScriptFromFile(fileUrl, null, true);
        promise.resolve(true);
    }
}
