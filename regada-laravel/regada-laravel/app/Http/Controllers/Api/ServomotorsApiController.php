<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServomotorCollection;
use App\Http\Resources\ServomotorResource;
use App\Models\Servomotor;
use Illuminate\Http\Request;

class ServomotorsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $servomotor = Servomotor::when(
            $request->adjustmentTimeMax > 0,
            function ($query, $value) use ($request) {
                return $query->where('adjustment_time', '>=', $request->adjustmentTimeMin)
                    ->where('adjustment_time', '<=', $request->adjustmentTimeMax);
            }
        )
            ->when(
                $request->loadTorqueMax > 0,
                function ($query, $value) use ($request) {
                    return $query->where('max_load_torque', '>=', $request->loadTorqueMin)
                        ->where('max_load_torque', '<=', $request->loadTorqueMax);
                }
            )
            ->when(
                $request->workingAngleMax > 0,
                function ($query, $value) use ($request) {
                    return $query->where('working_angle_from', '>=', $request->workingAngleMin)
                        ->where('working_angle_to', '<=', $request->workingAngleMax);
                }
            )
            ->when(
                $request->temperatureMax > -100,
                function ($query, $value) use ($request) {
                    return $query->where('temperature_from', '>=', $request->temperatureMin)
                        ->where('temperature_to', '<=', $request->temperatureMax);
                }
            )
            ->when(
                $request->coverageMax > 0,
                function ($query, $value) use ($request) {
                    return $query->where('coverage_from', '>=', $request->coverageMin)
                        ->where('coverage_to', '<=', $request->coverageMax);
                }
            )
            ->when(
                $request->weightMax > 0,
                function ($query, $value) use ($request) {
                    return $query->where('weight_from', '>=', $request->weightMin)
                        ->where('weight_to', '<=', $request->weightMax);
                }
            )
            ->get();
            
        return response()->json(new ServomotorCollection($servomotor));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $servomotor = Servomotor::find($request->servomotor_id);
        return response()->json(new ServomotorResource($servomotor));
    }
}
