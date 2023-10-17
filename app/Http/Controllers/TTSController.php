<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TTSController extends Controller
{
    //
    public function sendRequest(Request $request) {

        $apiUrl = 'https://speech.crikk.com/tts';
        $apiKey = env('API_KEY');

        $requestData = $request->all();

        $response = Http::withHeaders([
            'x-api-key' => $apiKey,
            'Content-Type' => 'application/json',
        ])->post($apiUrl, $requestData);

        // dump("This is test ". $response->successful());

        if ($response->successful()) {
            $audioData = $response->body();
            $fileName = 'audio_'.time().'.mp3';
            $filePath = public_path('audio/'.$fileName);
            file_put_contents($filePath, $audioData);
            return response()->json(['audioURL' => $fileName]);
        } else {
            return response()->json(['error' => 'Failed to send request', ], $response->status());
        }

    }
}
