<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {

        $playlists = [
            [
                'id'=> 1,
                'title'=> 'Avengers: Infinity War',
                'src'=> 'https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/ab/3b/9a/ab3b9ac8-e641-50f0-d0c5-70ac3f90ea4f/mzvf_5172850007233101562.640x354.h264lc.U.p.m4v',
                'thumbnail'=> 'https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/dd/ca/3c/ddca3c1e-fada-95cd-8a42-4c9835a0adae/Job8224ac71-1fc0-42e8-866e-dcb66a5f8a1c-100692020-PreviewImage_preview_image_video_sdr-Time1531182498982.png/313x177mv.jpg',

                'disc'=> 'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios’ Avengers: Infinity War brings to the screen the ultimate, deadliest showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
            ],

            [
                'id'=> 2,
                'title'=> 'อควาแมน เจ้าสมุทร',
                'src'=> 'https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/c2/a7/8b/c2a78b54-a0da-2486-3852-20a7fe98735a/mzvf_195035294550437066.640x356.h264lc.U.p.m4v',
                'thumbnail'=>  'https://play-lh.googleusercontent.com/proxy/NtJPbp1xXGm4s4zqlYPuk9f_gOznIa5ewYgd6WHiVvUxQn7Hp65buBHPaOLrR95PQOk6fC71Sma1lJkgVvFu_tuQ5EwOn0uwhSfEAoySveo5yTn85KcpvLxLTQ=w1440-h810-rw',

                'disc'=> 'การผจญภัยที่เต็มไปด้วยเรื่องราวสุดตื่นเต้นของการเดินทางในโลกใต้น้ำ ไปทั่วเจ็ดคาบสมุทรอันกว้างใหญ่ไพศาลและน่าตื่นตา “อควาแมน เจ้าสมุทร” เปิดเผยเรื่องราวที่มาของ อาร์เธอร์ เคอร์รี ซึ่งเป็นลูกครึ่งมนุษย์กับชาวแอตแลนติส และพาเขาออกสู่การเดินทาง ที่ต้องจดจำไปชั่วชีวิต ซึ่งไม่เพียงแต่ทำให้ต้องเผชิญกับตัวตนที่แท้จริงของเขาเท่านั้น แต่ ยังเป็นการค้นหาด้วยว่าเขามีความเหมาะสมหรือไม่ที่จะเกิดมาเป็น…กษัตริย์',
            ],

            [
                'id'=> 3,
                'title'=> 'Avengers: Endgame',
                'src'=> 'https://trailers.apple.com/405/us/media/trailers/marvel/avengers-endgame/avengers-endgame-overpower_a720p.m4v',
                'thumbnail'=>'https://is5-ssl.mzstatic.com/image/thumb/Video123/v4/88/ba/16/88ba1690-4f95-be04-511c-bf023242b4cb/source/313x177mv.jpg',

                'disc'=>  'The fourth installment in the Avengers saga is the culmination of 22 interconnected Marvel films and the climax of an epic journey. The world’s greatest heroes will finally understand just how fragile our reality is—and the sacrifices that must be made to uphold it—in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle.',
            ]

        ];

        return response()->json( $playlists );
    }
}
