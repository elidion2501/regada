<?php

namespace Database\Seeders;

use App\Models\AllowedCode;
use App\Models\Servomotor;
use App\Models\ServomotorProperty;
use App\Models\ServomotorPropertyColumn;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Servomotor::factory()->create();
        $this->call(ServomotorSeeder::class);
        $this->call(ServomotorColumnPropertiesSeeder::class);
        $this->call(ServomotorColumnSeeder::class);
        
        // for ($k=1; $k < 5; $k++) {
        //     for ($i=1; $i < 5 ; $i++) {
        //         ServomotorProperty::factory()->state(['row_id' => $i , 'servomotor_property_column_id' => $i + (4*$k - 4), 'servomotor_id' => 1, 'code' =>  $k])->create();
        //         if ($i < 4) {
        //             AllowedCode::factory()->state([ 'column_id' => 1, 'servomotor_id' => 1, 'code' =>  $k, 'allowed_next_code' => $k + 1 +$i * 50])->create();
        //         }
        //     }
        // }
        // for ($k=1; $k < 5; $k++) {
        //     for ($i=1; $i < 5 ; $i++) {
        //         ServomotorProperty::factory()->state(['row_id' => $i , 'servomotor_property_column_id' => $i + (4*$k - 4), 'servomotor_id' => 1,  'code' =>  $k+50])->create();
        //         if ($i < 4) {
        //             AllowedCode::factory()->state([ 'column_id' => 2, 'servomotor_id' => 1, 'code' =>  $k+50, 'allowed_next_code' => $k + 1 +$i * 50])->create();
        //         }
        //     }
        // }
        // for ($k=1; $k < 5; $k++) {
        //     for ($i=1; $i < 5 ; $i++) {
        //         ServomotorProperty::factory()->state(['row_id' => $i , 'servomotor_property_column_id' => $i + (4*$k - 4), 'servomotor_id' => 1,  'code' =>  $k+100])->create();
        //         if ($i < 4) {
        //             AllowedCode::factory()->state([ 'column_id' => 3, 'servomotor_id' => 1, 'code' =>  $k+100, 'allowed_next_code' => $k  +$i * 50])->create();
        //         }
        //     }
        // }
        // for ($k=1; $k < 5; $k++) {
        //     for ($i=1; $i < 5 ; $i++) {
        //         ServomotorProperty::factory()->state(['row_id' => $i , 'servomotor_property_column_id' => $i + (4*$k - 4), 'servomotor_id' => 1,  'code' =>  $k+150 ])->create();
        //         // if ($i < 4) {
        //         //     AllowedCode::factory()->state([ 'column_id' => 4, 'servomotor_id' => 1, 'code' =>  $k+150, 'allowed_next_code' => $k+150])->create();
        //         // }
        //     }
        // }
        // for ($k=1; $k < 2; $k++) {
        //     for ($i=1; $i < 5 ; $i++) {
        //         ServomotorPropertyColumn::factory()->state(['row_id' => $i, 'column_id' => $k, 'servomotor_id' => 1])->create();
        //     }
        // }
        // for ($k=2; $k < 3; $k++) {
        //     for ($i=1; $i < 3 ; $i++) {
        //         ServomotorPropertyColumn::factory()->state(['row_id' => $i, 'column_id' => $k, 'servomotor_id' => 1])->create();
        //     }
        // }
        // for ($k=3; $k < 5; $k++) {
        //     for ($i=1; $i < 4 ; $i++) {
        //         ServomotorPropertyColumn::factory()->state(['row_id' => $i, 'column_id' => $k, 'servomotor_id' => 1])->create();
        //     }
        // }
    }
}
