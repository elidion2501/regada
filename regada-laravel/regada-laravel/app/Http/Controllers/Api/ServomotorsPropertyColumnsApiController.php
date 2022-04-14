<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServomotorsPropertyCollection;
use App\Http\Resources\ServomotorsPropertyColumnsCollection;
use App\Http\Resources\ServomotorsPropertySingleCollection;
use App\Models\Servomotor;
use App\Models\ServomotorProperty;
use App\Models\ServomotorPropertyColumn;
use Illuminate\Http\Request;

class ServomotorsPropertyColumnsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $servomotor = ServomotorPropertyColumn::where('servomotor_id', $request->servomotor_id)->get()->sortBy('row_id')->groupBy('column_id')->sortKeys();

        return response()->json(new ServomotorsPropertyColumnsCollection($servomotor));
    }

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ServomotorPropertiesIndex(Request $request)
    {
        $servomotor = ServomotorProperty::where('servomotor_id', $request->servomotor_id)->get();

        return response()->json(new ServomotorsPropertySingleCollection($servomotor));
    }

}
